module.exports.dashboard_get = (req,res,next)=>{
    const uid = req.cookies.uid;
    if(uid)
    {
        res.render('dashboard',{title:"Dashboard"});
    }
    else
    {
        res.redirect('/login');
    }

}
