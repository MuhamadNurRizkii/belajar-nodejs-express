import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf((info) => {
      return `${new Date().toISOString().split("T")[0]}:\n${info.level.toLocaleUpperCase()}: ${info.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });
  const sayHello = (name) => {
    return `Hello, ${name}`;
  };

  logger.info(sayHello("Rizki"));
});
