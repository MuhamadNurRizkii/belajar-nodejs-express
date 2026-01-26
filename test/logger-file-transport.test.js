import winston from "winston";

test("create new logger with file &  console transport", () => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
        level: "warn",
      }),
    ],
  });

  logger.warn("Hello World");
  logger.warn("Hello, Rizki");
});
