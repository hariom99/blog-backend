const express = require("express");
const topPosts = express.Router();
const tPosts = require("../blogs/top-posts")

topPosts.post("/", (req, res) => {
    res.send(tPosts);
})

module.exports = topPosts;