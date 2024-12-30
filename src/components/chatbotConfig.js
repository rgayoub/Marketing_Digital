import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "ServiceBot",
  initialMessages: [
    createChatBotMessage(
      <div>
        Bonjour ! <br />
        Voici nos services :<br />
        1. Design<br />
        2. Création de contenu<br />
        3. Community Management<br />
        4. Production audiovisuelle<br />
        Vous pouvez choisir un service en tapant son numéro ou écrire directement son nom.
      </div>
    ),
  ],
  customComponents: {
    header: () => (
      <div style={{ textAlign: 'center', backgroundColor: '#b7934c', padding: '2px', borderBottom: '1px solid #ccc' }}>
        <h3 style={{ color: 'white', fontSize: '16px', fontWeight: '700', fontFamily: 'Arial, sans-serif', textShadow: '3px 2px 4px black' }}>
          Conversation avec ServiceBot
        </h3>
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#A89F91', // Couleur de fond des messages du bot #6B5C3B
      color: 'white', // Couleur du texte
    },
    userMessageBox: {
      backgroundColor: '#f1f1f1', // Couleur de fond des messages de l'utilisateur
      color: 'black', // Couleur du texte
    },
    chatButton: {
      backgroundColor: '#b7934c', // Couleur de fond du bouton "Envoyer"
      color: '#fff', // Couleur du texte du bouton
      borderRadius: '15px',
    },
  },
  state: {},
  widgets: [],
};

export default config;
