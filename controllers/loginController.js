const firebase = require('../fire');
const url = 'http://localhost:2020/'

module.exports.login_get = (req,res) =>{
    res.render('login',{title:'login'});
}

module.exports.login_post = (req,res) =>{
    const {email,passwd} = req.body;
    console.log(email,passwd)
    // var message = "Incorrect email or password";
    
    
        var ref = firebase.database().ref('users')

        ref.orderByChild('username').equalTo(email).on('child_added', (snapshot) => {
            if(snapshot.val().password == passwd && snapshot.val().role == "Admin")
            {
                res.status(200).json({data:"success",url});
                // res.redirect
            }
            else
            {
                res.status(400).json({data:"boooo incorrect username or password"});
            }
            // console.log(snapshot.key + ' was ' + snapshot.val().password + ' meters tall');
        });
        }

module.exports.reset_password = (req,res) =>{
    res.render('reset_password');
}