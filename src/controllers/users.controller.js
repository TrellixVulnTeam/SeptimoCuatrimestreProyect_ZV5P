//const user = require('../models/user');
const User = require('../models/user');
const passport = require('passport');

const userCtrl = {}

// Form
userCtrl.loginUser = (req, res) =>{
    res.render('user/login')
};

// Registrarse form
userCtrl.singinUser = passport.authenticate('local',{
    failureRedirect: '/user/login',
    successRedirect: '/products',
})

//

userCtrl.signup = (req, res) =>{
    res.render('user/singin')
};

userCtrl.logout = (req, res) =>{
    //req.logout();
    req.session.destroy();
    console.log('Cerrar sesión');

};



userCtrl.createUser = async (req,res) => {

     const { name, email, password } = req.body;
    
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            console.log('Error, usuario ya existente');
            res.redirect('/user/singup');
        }else{
            const newUser = new User({ name, email,password });
            newUser.password = await  newUser.encryptPassword(password)
            await newUser.save();
            console.log('Usuario creado con exito');
            res.redirect('/user/login');
        }
    

};

module.exports = userCtrl