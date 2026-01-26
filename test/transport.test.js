import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(`${new Date()} : ${info.message}`);
      next();
    }
  }

  const logger = winston.createLogger({
    transports: [new MyTransport({})],
  });

  logger.info("Hello World");
  logger.error("Terjadi kesalahan");
});
