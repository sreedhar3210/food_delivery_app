const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/createuser",
    [body('email','Enter a valid email id').isEmail(),
    body('name').isLength({min : 5}),
    body('password','password length should be atleast 5').isLength({min : 5})],  
    async(req,res)=>{
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({ errors: errors.array() });
            }
            await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location
            });
            res.send("user is added succesfully");
        }catch(error){
            console.log(error);
            res.send("failed to add user");
        }
    }
)

module.exports = router;