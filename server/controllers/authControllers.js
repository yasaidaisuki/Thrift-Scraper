const User = require('../models/user')

const test = (req, res) => {
    res.json("test is working");
}

const registerUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        if (!password || password <5) {
            err: "password is required & should be atleast 5 characters"
        }
        const exist = await user.findOne({email});
        if (exist) {
            return res.json({
                err: "email already exists"
            })
        }
        const user = await User.create({
            email,password
        })
        return res.json(user)
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    test,
    registerUser
}