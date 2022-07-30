const firebase = require('../fire');
const auth = require('../middleware/auth');
const url = 'http://localhost:2020/';

module.exports.login_get = (req,res) =>{
    try {
        const uid = req.cookies.uid;
        console.log(req.cookies.uid)
        if(auth.verify_token(uid))
        {
            console.log(auth.verify_token(uid).uid)
            res.redirect('/dashboard');
        }
        else
        {
            res.render('login',{title:'login'});
        }
    } catch (error) {
        res.render('login',{title:'login'});
    }  
}

module.exports.login_post = (req,res) =>{
    res.clearCookie('uid');
    const {email,passwd} = req.body;
    console.log(email,passwd);
        var ref = firebase.database().ref('users');
        ref.orderByChild('username').equalTo(email).on('child_added', (snapshot) => {
            if(snapshot.hasChild && snapshot.val().password === passwd && snapshot.val().role === "Admin")
            {
                console.log("correct pwd")
                res.cookie(`uid`,auth.create_token(snapshot.val().id));
                res.status(200).json({data:"success",url});
            }
            else{
                console.log("incorrect pwd")
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