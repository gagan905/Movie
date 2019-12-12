const index = function(req,res){
    res.render('index',{title: "Welcome to Movie"})
};
const listdisplay = function(req, res) {
    res.render('list-display', {title: "welcome to Movie"})
};
module.exports = {
    index, listdisplay
}