const express = require("express");
const { registerdUsers } = require("./registerUser");

const loginRouter = express.Router();



loginRouter.post("/", (req, res) => {
    let lStatus = false;
    // console.log(registerdUsers);
    if (registerdUsers.length === 0) {
        // console.log("not registered");
        res.send("NOT_REGISTERED")
        res.end();
        return;

    }
    else {
        registerdUsers.map((user) => {
            if (user.userEmail === req.body.email && user.userPassword === req.body.password) {
                user.isLoggedIn = true;
                lStatus = true;
                // console.log("login success");
                res.status(200).send("SUCCESS");
                res.end()
                return;
            }
        })
    }
    // console.log(req.body.email + " " + req.body.password);
    if (!lStatus)
        res.send("LOGIN_FAILED");
})

module.exports = loginRouter;