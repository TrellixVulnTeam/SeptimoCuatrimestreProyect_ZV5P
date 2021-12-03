const User = require('../models/user')

const userCtrl = {}

userCtrl.loginUser = (req, res) =>{
    res.render('user/login')
}

userCtrl.singinUser = (req, res) =>{
    res.render('user/singin')
}

userCtrl.createUser = (req,res) => {
    let user = new User()
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    user.save(err => {
        if(err){
            res.json(err)
        } else {
            res.json("successfully saved")
        }
    })
}

module.exports = userCtrl