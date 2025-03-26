import React, { useEffect, useState } from "react";
import { database } from "../../../firebaseConfig";
import { ref, onValue } from "firebase/database";
import './CompletedConversations.css';

const CompletedConversations = () => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const completedRef = ref(database, 'completed-conversations');
    onValue(completedRef, (snapshot) => {
      const data = snapshot.val();
      const loadedConversations = data ? Object.values(data) : [];
      setConversations(loadedConversations);
    });
  }, []);

  return (
    <div className="completed-conversations-container">
      <h2>Conversaciones Completadas</h2>
      {conversations.length === 0 ? (
        <p>No hay conversaciones completadas.</p>
      ) : (
        <div className="conversation-list">
          {conversations.map((conversation, index) => (
            <div key={index} className="conversation-card">
              <h3>Conversación {index + 1}</h3>
              <ul>
                {conversation.messages.map((message, msgIndex) => (
                  <li key={msgIndex}>
                    <strong>{message.sender === 'user' ? 'Usuario' : 'Bot'}:</strong> {message.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedConversations;