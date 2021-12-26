const express = require("express");
const homeArticles = express.Router();
const homeart = require("../blogs/homeArticles")

homeArticles.post("/", (req, res) => {
    res.send(homeart)
})

module.exports = homeArticles;