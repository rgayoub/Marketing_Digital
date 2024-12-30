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
        bottom: '30px',
        right: '90px',
        width: '276px', // Ajuster la largeur au contenu
        height: '501px', // Ajuster la hauteur pour un design compact
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)',
        backgroundColor: '#fff',
        zIndex: 5000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centrer verticalement
    },
};

export default MonChatbot;
