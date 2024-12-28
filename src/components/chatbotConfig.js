import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "ServiceBot",
    initialMessages: [
        createChatBotMessage(
            "Bonjour ! Voici nos services :\n\n1. Design\n2. Création de contenu\n3. Community Management\n4. Production audiovisuelle\n\nVous pouvez choisir un service en tapant son numéro ou écrire directement son nom."
        ),
    ],
    customComponents: {},
    customStyles: {},
    state: {},
    widgets: [],
};

export default config;
