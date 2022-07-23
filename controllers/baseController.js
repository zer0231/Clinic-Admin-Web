module.exports.check404 = (req,res) =>{
    res.status(404).render('404',{title:"lost?"});
}