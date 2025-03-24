// Info.jsx
import React, { useState } from 'react';
import "./Info.css";
import Body from '../../components/main-elements/body/Body';
import Chatbot from '../../components/secondary-elements/chat-bot/ChatBot';
import CompletedConversations from '../../components/secondary-elements/completed-conversations/CompletedConversations';

export const Info = () => {
  const [conversationEnded, setConversationEnded] = useState(false);

  const handleConversationEnd = () => {
    setConversationEnded(true);  // Cambiar el estado a verdadero cuando la conversación termine
  };

  return (
    <>
      <Body>
        <Chatbot onConversationEnd={handleConversationEnd} />  {/* Pasamos la función para finalizar la conversación */}
        {conversationEnded && <CompletedConversations />}  {/* Mostrar las conversaciones completadas solo cuando haya terminado */}
      </Body>
    </>
  );
};
