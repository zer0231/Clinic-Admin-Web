const auth = require('../middleware/auth');

module.exports.dashboard_get = (req,res,next)=>{
    try {
        const uid = req.cookies.uid;
        if(auth.verify_token(uid))
            res.render('dashboard',{title:"Dashboard"});
        else
            throw err;
    } catch (error) {
        res.redirect('/login');
    }
}
