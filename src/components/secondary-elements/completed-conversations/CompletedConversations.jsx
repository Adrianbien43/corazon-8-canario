// CompletedConversations.jsx
import React, { useState, useEffect } from 'react';
import { database } from "../../../firebaseConfig";
import { ref, onValue } from "firebase/database";
import './CompletedConversations.css';

const CompletedConversations = () => {
  const [completedConversations, setCompletedConversations] = useState([]);

  useEffect(() => {
    const completedRef = ref(database, 'completed-conversations');

    onValue(completedRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedConversations = Object.values(data);
        setCompletedConversations(loadedConversations);
      }
    });
  }, []);

  return (
    <div className="completed-conversations-container">
      <h2>Conversaciones Completadas</h2>
      <div className="conversation-list">
        {completedConversations.length === 0 ? (
          <p>No hay conversaciones completadas aún.</p>
        ) : (
          completedConversations.map((conversation, index) => (
            <div key={index} className="conversation-card">
              <div className="conversation-header">
                <h3>Conversación #{index + 1}</h3>
              </div>
              <div className="conversation-messages">
                {conversation.messages.map((message, msgIndex) => (
                  <div key={msgIndex} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                    <p><strong>{message.sender === 'user' ? 'Tú' : 'ChatBot'}:</strong> {message.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompletedConversations;
