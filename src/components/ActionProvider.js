class ActionProvider {
    constructor(createChatBotMessage, setState) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setState;

        this.state = {
            lastService: null,
            messages: [],
        };
    }

    // Message de bienvenue
    handleGreeting() {
        const message = this.createChatBotMessage(
            "Bonjour ! Voici nos services :\n\n1. Design\n2. Création de contenu\n3. Community Management\n4. Production audiovisuelle\n\nVous pouvez choisir un service en tapant son numéro ou écrire directement son nom."
        );
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            lastService: null, // Réinitialise le dernier service
        }));
    }

    // Gestion des options de service
    handleServiceOptions(service) {
        const options = {
            design: ["Logo", "Identité visuelle", "Bannière publicitaire"],
            contentCreation: ["Articles de blog", "Publications réseaux sociaux", "Vidéos courtes"],
            communityManagement: ["Connaître les prix", "Voir des stratégies appliquées", "En discuter avec un expert"],
            audioVisualProduction: ["Vidéo promotionnelle", "Vidéo d'annonce", "Montage vidéo"],
        };

        const message = this.createChatBotMessage(
            `Voici ce que nous proposons pour le service "${service}" :\n\n${this.formatOptions(options[service])}\n\nCombien d'options souhaitez-vous voir ?`
        );
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            lastService: service, // Met à jour le dernier service choisi
        }));
    }

    // Gestion de la sélection par numéro
    handleUserSelection(option) {
        const serviceOptions = {
            design: ["Logo", "Identité visuelle", "Bannière publicitaire"],
            contentCreation: ["Articles de blog", "Publications réseaux sociaux", "Vidéos courtes"],
            communityManagement: ["Connaître les prix", "Voir des stratégies appliquées", "En discuter avec un expert"],
            audioVisualProduction: ["Vidéo promotionnelle", "Vidéo d'annonce", "Montage vidéo"],
        };

        const { lastService } = this.state;

        if (!lastService) {
            const allOptions = Object.entries(serviceOptions)
                .map(([service, options]) => `${service} : ${options.slice(0, option).join(", ")}`)
                .join("\n\n");

            const message = this.createChatBotMessage(
                `Vous n'avez pas sélectionné de service spécifique. Voici les premières options disponibles :\n\n${allOptions}`
            );
            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
            }));
            return;
        }

        if (option < 1 || option > serviceOptions[lastService].length) {
            const message = this.createChatBotMessage("Veuillez choisir un nombre valide.");
            this.setState((prev) => ({
                ...prev,
                messages: [...prev.messages, message],
            }));
            return;
        }

        const selectedOptions = serviceOptions[lastService].slice(0, option);
        const message = this.createChatBotMessage(
            `Voici les options pour le service "${lastService}" : ${selectedOptions.join(", ")}`
        );
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }

    formatOptions(optionsArray) {
        return optionsArray.map((option, index) => `${index + 1} : ${option}`).join("\n");
    }

    handleDefault() {
        const message = this.createChatBotMessage(
            "Désolé, je n'ai pas compris. Pouvez-vous reformuler votre demande ?"
        );
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    }
}

export default ActionProvider;