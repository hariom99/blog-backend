const express = require("express");
const cors = require("cors");
const app = express();
app.use("/images", express.static("images"));
const blogRouter = require("./api-routes/allBlogs");
app.use(express.json());
app.use(cors())
const homeArticles = require("./api-routes/homeArticles");
const { registerRouter } = require("./api-routes/registerUser");
const loginRouter = require("./api-routes/login");
// const blogRouter = createRequire("./api-routes/allBlogs");


app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/home-articles", homeArticles);
app.use("/api/v1/register-user", registerRouter);
app.use("/api/v1/login/", loginRouter)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server Started...at port", PORT);
})

