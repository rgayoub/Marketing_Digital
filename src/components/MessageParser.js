class MessageParser {
  constructor(actionProvider) {
      this.actionProvider = actionProvider;
  }

  parse(message) {
      const lowerCaseMessage = message.toLowerCase();

      if (lowerCaseMessage.match(/^\d+$/)) {
          const option = parseInt(lowerCaseMessage, 10);
          this.actionProvider.handleUserSelection(option);
      } else if (lowerCaseMessage.includes("design")) {
          this.actionProvider.handleServiceOptions("design");
      } else if (lowerCaseMessage.includes("création de contenu")) {
          this.actionProvider.handleServiceOptions("contentCreation");
      } else if (lowerCaseMessage.includes("community management")) {
          this.actionProvider.handleServiceOptions("communityManagement");
      } else if (lowerCaseMessage.includes("production audiovisuelle")) {
          this.actionProvider.handleServiceOptions("audioVisualProduction");
      } else {
          this.actionProvider.handleDefault();
      }
  }
}

export default MessageParser;