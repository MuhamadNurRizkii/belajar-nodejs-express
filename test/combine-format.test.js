import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.simple(),
    ),
    transports: [new winston.transports.Console({})],
  });
  const sayHello = (name) => {
    return `Hello, ${name}`;
  };

  logger.info(sayHello("Rizki"));
  logger.info(sayHello("Andi"));
  logger.info(sayHello("Budi"));
});
