const express = require("express");
const registerRouter = express.Router();
let registerdUsers = [];
registerRouter.post("/", (req, res) => {
    // console.log(req.body);
    const user = { ...req.body, isLoggedIn: false };
    if (registerdUsers.length > 0) {
        registerdUsers.map((data) => {
            if (data.userEmail === req.body.userEmail) {
                res.send("already registered..")
//                 res.end()
                return;
            }
        })
    }
    else {
        registerdUsers.push(user);
        // console.log(registerdUsers);

        res.send("Registered successfully..");
//         res.end();
    }
});
module.exports = { registerRouter, registerdUsers };
