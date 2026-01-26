import winston from "winston";

test("create new logger with file &  console transport", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "error.log",
      }),
    ],
  });

  logger.info("Hello World");
  logger.info("Hello World");
  logger.info("Hello World");
  logger.error("Terjadi kesalahan");
  logger.error("Terjadi kesalahan");
  logger.error("Terjadi kesalahan");
});
