const authModel = require("../models/auth.model")
const loginModel = require("../models/login.model")


exports.signUp = async (req,res) => {
    try {
        const bodyData = req.body
        const saveData = new authModel(bodyData)
        await saveData.save()
        res.json("User Registered")
    } catch (error) {
        res.json(error.message)
    }
}

exports.login = async (req,res) => {
    try {
        const bodyData = {
            email: req.body.email,
            password: req.body.password
        }
        const saveData = new loginModel(bodyData)
        await saveData.save()
        res.json("Login successfull")
    } catch (error) {
        res.json(error.message)
    }
}