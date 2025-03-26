import React, { useState, useEffect } from "react";
import { database } from "../../../firebaseConfig";
import { ref, push, onValue, set } from "firebase/database";
import './Chatbot.css';

const Chatbot = ({ onConversationEnd }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const userId = 'User1'; // ID único del usuario

  useEffect(() => {
    const messagesRef = ref(database, `conversations/conversation-Chat-and-${userId}/messages`);
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedMessages = Object.values(data);
        setMessages(loadedMessages);
      } else {
        setMessages([]);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, sender: 'user', timestamp: Date.now() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    saveMessageToFirebase(userMessage);

    const lowerCaseInput = inputValue.toLowerCase();
    let botMessage = null;

    if (lowerCaseInput.includes('hola')) {
      botMessage = { text: '¡Hola! ¿En qué puedo ayudarte?', sender: 'bot', timestamp: Date.now() };
    } else if (lowerCaseInput.includes('adiós')) {
      botMessage = { text: '¡Adiós! Espero haber podido ayudarte.', sender: 'bot', timestamp: Date.now() };
    }

    if (botMessage) {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      saveMessageToFirebase(botMessage);
    }

    setInputValue('');
  };

  const saveMessageToFirebase = (message) => {
    const messagesRef = ref(database, `conversations/conversation-Chat-and-${userId}/messages`);
    push(messagesRef, message);
  };

  // Nueva función para guardar la conversación completada
  const saveCompletedConversation = () => {
    const completedRef = ref(database, `completed-conversations/conversation-${Date.now()}`);
    set(completedRef, {
      userId: userId,
      messages: messages,
      timestamp: Date.now(),
    }).then(() => {
      setMessages([]); // Limpiar los mensajes
      alert("La conversación ha sido guardada correctamente.");
      if (onConversationEnd) {
        onConversationEnd(); // Llamar a la función para indicar que la conversación ha terminado
      }
    });
  };

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
        </div>

        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="input"
            placeholder="Escribe tu mensaje..."
          />
          <button onClick={handleSendMessage} className="button">
            Enviar
          </button>
        </div>

        <button onClick={saveCompletedConversation} className="end-conversation-button">
          Terminar Conversación
        </button>
      </div>
    </div>
  );
};

export default Chatbot;