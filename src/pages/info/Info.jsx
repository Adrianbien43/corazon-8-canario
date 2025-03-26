import React, { useState } from 'react';
import "./Info.css";
import Body from '../../components/main-elements/body/Body';
import Chatbot from '../../components/secondary-elements/chat-bot/ChatBot';
import CompletedConversations from '../../components/secondary-elements/completed-conversations/CompletedConversations';
import RSSIcon from '../../components/secondary-elements/rss/rss';

export const Info = () => {
  const [conversationEnded, setConversationEnded] = useState(false);

  const handleConversationEnd = () => {
    setConversationEnded(true);
  };

  return (
    <>
      <Body>
        <Chatbot onConversationEnd={handleConversationEnd} />
        {conversationEnded && <CompletedConversations />}
        <div className="rss-section">
          <h3>Suscríbete a nuestro RSS</h3>
          <RSSIcon />
        </div>
      </Body>
    </>
  );
};