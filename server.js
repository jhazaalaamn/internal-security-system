require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// إعدادات القاعدة
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// جلسات الدخول
app.use(session({
  secret: "security_secret_key",
  resave: false,
  saveUninitialized: false,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// واجهة تسجيل الدخول
app.get("/", (req, res) => {
  res.render("login");
});

// باقي الواجهات ستُضاف هنا لاحقًا
// ...

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
