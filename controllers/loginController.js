module.exports.login_get = (req,res) =>{
    res.render('login',{title:'login'});
}

module.exports.login_post = (req,res) =>{
    const {email,passwd} = req.body;
    var message = "Incorrect email or password";
   if(1)
   {
       message = "Login successful";
       res.status(200).json(message);
   }
   else{
       res.status(400).json(message);
   }
}

module.exports.reset_password = (req,res) =>{
    res.render('reset_password');
}