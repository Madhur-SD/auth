const express = require("express")
const router = express.Router()
const { signUp, login, response } = require("../controllers/auth.controller")



router.post("/register", signUp)
router.post("/login", login)
router.get('/view' , response)

module.exports = router