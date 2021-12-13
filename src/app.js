if (process.env.USER) require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("dev"));

const getMovies = (req, res, next) => {
    res.json(data);
};

app.get("/movies", getMovies);

module.exports = app;
