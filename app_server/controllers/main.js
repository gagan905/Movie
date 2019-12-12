const index = function(req,res){
    res.render('index',{title: "About Website"})
};

module.exports = {index};