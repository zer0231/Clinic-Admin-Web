const firebase = require('../fire');
const url = 'http://localhost:2020/';

module.exports.login_get = (req,res) =>{
    const uid = req.cookies.uid;
    if(uid)
    {
        res.redirect('/dashboard');
    }
    else
    {
        res.render('login',{title:'login'});
    }
  
}

module.exports.login_post = (req,res) =>{
    console.log("cookie: "+req.cookies.name)
    const {email,passwd} = req.body;
    console.log(email,passwd)

        var ref = firebase.database().ref('users')

        ref.orderByChild('username').equalTo(email).on('child_added', (snapshot) => {
            if(snapshot.val().password == passwd && snapshot.val().role == "Admin")
            {
                res.cookie(`uid`,snapshot.val().id);
                res.status(200).json({data:"success",url});
                
                // res.redirect
            }
            else
            {
                res.status(400).json({data:"boooo incorrect username or password"});
            }
        });
        }

module.exports.logout_get = (req,res) =>{
    res.clearCookie('uid');
    res.redirect('/login');
}

module.exports.reset_password = (req,res) =>{
    res.render('reset_password');
}