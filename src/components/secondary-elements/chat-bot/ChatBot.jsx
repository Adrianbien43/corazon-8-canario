import React, { useState } from "react";
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const lowerCaseInput = inputValue.toLowerCase();

    if (
      lowerCaseInput.includes('buenos días') ||
      lowerCaseInput.includes('hola') ||
      lowerCaseInput.includes('buenas') ||
      lowerCaseInput.includes('qué tal')
    ) {
      const botMessage = { text: '¡Hola! ¿En qué puedo ayudarte?', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    if (lowerCaseInput === 'hola') {
      const botMessage = { text: '¡Hola! ¿Cómo estás?', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    if (lowerCaseInput.includes('cómo va tu día') || lowerCaseInput.includes('cómo estás')) {
      const botMessage = { text: '¡Estoy bien, gracias! ¿Y tú?', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    if (lowerCaseInput.includes('cuál es tu color favorito')) {
      const botMessage = { text: '¡Me gusta el azul! ¿Y a ti?', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    if (lowerCaseInput.includes('qué te gusta hacer')) {
      const botMessage = { text: '¡Me gusta ayudar a las personas con sus preguntas!', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    setInputValue('');
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
      </div>
    </div>
  );
};

export default Chatbot;
