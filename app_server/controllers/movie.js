const request = require('request');
const apiOptions = { server: 'http://localhost:3000' };

const about = function(req,res, next){
    res.render('about',{title: "Welcome to Movie "})
};

const _renderHomepage= function(req, res, responseBody)
{
    res.render('movielist',
              {
        movies: responseBody
    });
};

const homelist= function(req,res)
{
    const path= '/api/movies';
    const requestOptions ={
        url: apiOptions.server + path,
        method: 'Get',
        json:{}
    };
    request(requestOptions,
           (err,response,body)=>{
        _renderHomepage(requestOptions,res,body);
    });
};

const _renderDetailPage= function(req, res, responseBody)
{
    res.render('movie-info', {
        currentMovie:responseBody
    });
};

const movieInfo= function(req, res){
    const path=`/api/movies/${req.params.movieid}`;
    const requestOptions={
        url: apiOptions.server + path, 
        method:'Get',
        json:{}
    };
    
    request(
    requestOptions,
    (err, response,body)=>
    {
        console.log(body);
        _renderDetailPage(req, res, body);
    });
    
};




const _renderCreatePage = function(req, res){
    res.render('create-new-movie', {
        title: "Create New movie"
    });
};

const AddNewMovie = function(req, res){
    _renderCreatePage(req, res);
};

const doAddNewMovie = function(req, res){
    const path = '/api/movies';
    const postdata = {
        name: req.body.name,
        type: req.body.type,
        director: req.body.director,
        year: req.body.year,
        description: req.body.description,
        rating:req.body.rating
    };
    console.log(postdata);
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode == 201){
                res.redirect('/list');
            }
        }
    );
};
module.exports = {
    homelist,movieInfo, doAddNewMovie, AddNewMovie, about
};