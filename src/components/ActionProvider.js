class ActionProvider {
  constructor(createChatBotMessage, setState) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setState;

      this.state = {
          lastService: null,
          messages: [],
      };
  }

  // Message de bienvenue avec sauts de ligne
  handleGreeting() {
      const message = this.createChatBotMessage(
          <div>
              Bonjour ! <br />
              Voici nos services :<br />
              1. Design<br />
              2. Création de contenu<br />
              3. Community Management<br />
              4. Production audiovisuelle<br />
              Vous pouvez choisir un service en tapant son numéro ou écrire directement son nom.
          </div>
      );
      this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
          lastService: null, // Réinitialise le dernier service
      }));
  }

  // Gestion des options de service avec sauts de ligne
  handleServiceOptions(service) {
      const options = {
          design: ["Logo", "Identité visuelle", "Bannière publicitaire"],
          contentCreation: ["Articles de blog", "Publications réseaux sociaux", "Vidéos courtes"],
          communityManagement: ["Connaître les prix", "Voir des stratégies appliquées", "En discuter avec un expert"],
          audioVisualProduction: ["Vidéo promotionnelle", "Vidéo d'annonce", "Montage vidéo"],
      };

      const message = this.createChatBotMessage(
          <div>
              Voici ce que nous proposons pour le service `{service}`:<br />
              {this.formatOptions(options[service])}<br />
              Combien d'options souhaitez-vous voir ?
          </div>
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
              .join("\n\n\n\n");

          const message = this.createChatBotMessage(
              <div>
                  Vous n'avez pas sélectionné de service spécifique. Voici les premières options disponibles :<br />
                  {allOptions}
              </div>
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
          <div>
              Voici les options pour le service `{lastService}`` : {selectedOptions.join(", ")}<br />
          </div>
      );
      this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
      }));
  }

  formatOptions(optionsArray) {
      return optionsArray.map((option, index) => `${index + 1} : ${option}`).join("\n\n\n\n");
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
