import winston from "winston";

async function callAsync() {
  return Promise.reject("Upss");
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      filename: "rejection.log",
      handleRejections: true,
      handleExceptions: true,
    }),
  ],
});

callAsync().catch((err) => console.log(err));
