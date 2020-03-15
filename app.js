/*************************** INITIALIZATION *******************************/

// express and path
const express = require("express");
const path = require("path");

/******************************* SECURITY *********************************/

// limit repeated requests to public APIs and/or endpoints such as password reset.
const rateLimit = require("express-rate-limit");
// helps secure your express apps by setting various HTTP headers
const helmet = require("helmet");
// sanitizes user-supplied data to prevent MongoDB operator injection
const mongoSanitize = require("express-mongo-sanitize");
// sanitize user input coming from POST body, GET queries, and url params
const xss = require("xss-clean");
// HTTP parameter pollution protection
const hpp = require("hpp");

/**************************** PARSE & COMPRESS ******************************/

// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// compresses response bodies for all request
const compression = require("compression");
// basic logger
const morgan = require("morgan");

/****************************** CORS AND HTTPS *******************************/

// cros origin requests
const cors = require("cors");
// enforces HTTPS connections on any incoming GET and HEAD requests
const enforce = require("express-sslify");

/***************************** ERROR HANDLING ********************************/

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

/********************************** ROUTES ***********************************/

const userRouter = require("./routes/userRoutes");
// const b = require("./routes/b");
// const c = require("./routes/c");

const app = express();
app.enable("trust proxy");

// cross-origin-requests
// https://github.com/expressjs/cors
app.use(cors());
app.options("*", cors());

app.use(helmet());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in a hour."
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(bodyParser.json());
app.use(cookieParser());

app.use(mongoSanitize());
app.use(xss());
app.use(hpp({ whitelist: [] }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // CONSOLE LOG COOKIES ON EACH REQUEST
  if (process.env.NODE_ENV === "development")
    console.log(req.cookies, req.requestTime);
  next();
});

// ROUTES
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/b", b);
// app.use("/api/v1/c", c);

if (process.env.NODE_ENV === "production") {
  // compress all responsee bodies
  app.use(compression());

  // enforce https whenever http are made
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // serving static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // on request to any route that is not covered - send index html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// HANDLING UNHANDLED ROUTES
app.all("*", (req, res, next) => {
  const error = new AppError(
    `Can't find ${req.originalUrl} route on this server.`,
    404
  );

  next(error);
});

// run service worker on request
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
