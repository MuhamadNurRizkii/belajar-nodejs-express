import winston, { level } from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Hello error" });
  logger.log({ level: "warn", message: "Hello warn" });
  logger.log({ level: "info", message: "Hello info" });
  logger.log({ level: "http", message: "Hello http" });
  logger.log({ level: "verbose", message: "Hello verbose" });
  logger.log({ level: "debug", message: "Hello debug" });
  logger.log({ level: "silly", message: "Hello silly" });
});

test("logging with shortcut function", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
  logger.http("Hello Http");
  logger.verbose("Hello Verbose");
  logger.debug("Hello Debug");
  logger.silly("Hello Silly");
});
