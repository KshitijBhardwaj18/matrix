const express = require('express');
const zod = require("zod");
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastname: zod.string(),
    password: zod.string()
})



const router = express.Router();

router.post("/signup", async (req, res) => {
    const {success} = signupBody.safeParse(req.body)

    if(!success) {
        return res.status(411).json({
            message: "Email already taken/ Wrong inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })
})

modules.exports = router;