const express = require("express")

const router = express.Router();

const controllers = require("./controller")


router.get('/', function(req, res) {
    return res.json({Message: "Index Of API"});
})


router.post("/register", controllers.auth.register)


// router.post("/login", controllers.auth.login)

// router.post("/verify", controllers.auth.verify)

// router.post("/password/email", controllers.auth.Passordemail)

// router.post("/password/reset", controllers.auth.reset)





module.exports = router;