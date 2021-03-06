const express = require("express");
const cors = require("cors");
const app = express();
app.use("/images", express.static("images"));
app.use(express.json());
app.use(cors())
const blogRouter = require("./api-routes/allBlogs");
const homeArticles = require("./api-routes/homeArticles");
const { registerRouter } = require("./api-routes/registerUser");
const loginRouter = require("./api-routes/login");
const topPosts = require("./api-routes/topPosts");
// const blogRouter = createRequire("./api-routes/allBlogs");


app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/home-articles", homeArticles);
app.use("/api/v1/register-user", registerRouter);
app.use("/api/v1/login/", loginRouter)
app.use("/api/v1/top-posts", topPosts)

// http:localhost:8000/api/v1/login/

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server Started...at port", PORT);
})

