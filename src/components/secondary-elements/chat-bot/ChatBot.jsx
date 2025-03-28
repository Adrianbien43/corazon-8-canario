import React, { useState, useEffect, useRef } from "react";
import { database } from "../../../firebaseConfig";
import { ref, push, onValue } from "firebase/database";
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const userId = 'User1';

  // Auto-scroll al final de los mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Cargar mensajes desde Firebase
  useEffect(() => {
    const messagesRef = ref(database, `conversations/${userId}/messages`);

    const unsubscribe = onValue(
      messagesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const loadedMessages = Object.values(data);
          setMessages(loadedMessages);
        } else {
          setMessages([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error:", error);
        setError("Error al cargar mensajes");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const saveMessageToFirebase = async (message) => {
    const messagesRef = ref(database, `conversations/${userId}/messages`);
    return push(messagesRef, message);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, sender: 'user', timestamp: Date.now() };

    // Actualización optimista
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    await saveMessageToFirebase(userMessage);

    // Respuesta del bot
    setIsTyping(true);
    const botResponse = generateBotResponse(inputValue);

    setTimeout(async () => {
      setMessages((prev) => [...prev, botResponse]);
      await saveMessageToFirebase(botResponse);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    if (/hola|buenos días/i.test(lowerCaseInput)) {
      return { text: '¡Hola! ¿En qué puedo ayudarte hoy?', sender: 'bot', timestamp: Date.now() };
    } else if (/adiós|chao|hasta luego/i.test(lowerCaseInput)) {
      return { text: '¡Hasta luego! Fue un gusto ayudarte.', sender: 'bot', timestamp: Date.now() };
    } else if (/cómo estás|como estas/i.test(lowerCaseInput)) {
      return { text: '¡Estoy funcionando al 100%! ¿Y tú cómo estás?', sender: 'bot', timestamp: Date.now() };
    } else if (/ayuda|necesito ayuda/i.test(lowerCaseInput)) {
      return { text: 'Claro, dime en qué necesitas ayuda.', sender: 'bot', timestamp: Date.now() };
    } else {
      return { text: 'No estoy seguro de entender. ¿Puedes reformular tu pregunta?', sender: 'bot', timestamp: Date.now() };
    }
  };

  if (loading) return <div className="loading">Cargando mensajes...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h3>ChatBot-Ayudas</h3>
        </div>

        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              {message.text}
            </div>
          ))}
          {isTyping && (
            <div className="message bot-message typing-indicator">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="input"
            placeholder="Escribe tu mensaje..."
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            className="button"
            disabled={!inputValue.trim() || isTyping}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;