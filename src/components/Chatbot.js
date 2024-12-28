import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa'; 
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import '../styles/animations.css'; // Chemin vers le fichier CSS
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const MonChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            {isOpen && (
                <div style={styles.chatbotContainer}>
                    <div style={styles.chatbotHeader}>
                        <h3 style={{ margin: 0 }}>Conversation avec MarketingBot</h3>
                    </div>
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />
                </div>
            )}
            <div onClick={toggleChatbot} className="icon-container icon-chatbot">
                <FaComments size={30} color="white" />
            </div>
        </div>
    );
};

const styles = {
    chatbotContainer: {
        position: 'fixed',
        bottom: '6px',
        right: '20px',
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)',
        backgroundColor: '#fff',
        zIndex: 1000,
    },
    chatbotHeader: {
        backgroundColor: '#c5a86e',
        color: 'white',
        padding: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    },
};

export default MonChatbot;
