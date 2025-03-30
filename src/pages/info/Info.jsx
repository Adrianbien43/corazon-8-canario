import React, { useState } from 'react';
import "./Info.css";
import Body from '../../components/main-elements/body/Body';
import Chatbot from '../../components/secondary-elements/chat-bot/ChatBot';
import RSSInfo from '../../components/secondary-elements/rss/RSSinfo';

export const Info = () => {
  const [conversationEnded, setConversationEnded] = useState(false);

  const handleConversationEnd = () => {
    setConversationEnded(true);
  };

  return (
    <>
      <Body>
        <Chatbot onConversationEnd={handleConversationEnd} />
        <div className="rss-section">
          <h3>Suscríbete a nuestro RSS</h3>
          <RSSInfo />
        </div>
      </Body>
    </>
  );
};