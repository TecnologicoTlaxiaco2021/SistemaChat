import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();

// Session
app.use(session({
  secret: "uauiwhuivhiawuvihab",
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false
}));

// Public URL
app.use(express.static("public"));

// views directory
app.set('views', './views');

// Cookie parser
app.use(cookieParser());

// GET and POST request
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({
    limit: '200mb',
    extended: true
}));
app.use(express.text({ limit: '200mb' }));

// Export app
export default app;