const express = require("express");
const blogRouter = express.Router();
const blogs = require("../blogs/blogs");


blogRouter.post("/", (req, res) => {
    console.log("request recieved....", req.body.currentPage);
    let category = req.body.currentPage;
    res.status(200).send(blogs[category]);
    // console.log(blogs[category]);
})

module.exports = blogRouter;