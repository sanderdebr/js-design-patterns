class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
  }

  log(message) {
    this.logs.push(message);
    console.log(message);
  }

  printLogCont() {
    console.log(this.logs.length);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);

function logFirstImplementation() {
  logger.printLogCont();
  logger.log("First file");
  logger.printLogCont();
}

function logSecondsImplementation() {
  logger.printLogCont();
  logger.log("Second file");
  logger.printLogCont();
}

logFirstImplementation();
logSecondsImplementation();
