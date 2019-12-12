var mongoose = require('mongoose');
var movies = mongoose.model('movie');

const getList = function (req, res){
    movies.find().exec(function(err, moviedata){
        if (err) {
            res
             .status(404)
              .json(err);
            return;
        }
        res
         .status(200)
         .json(moviedata);
    });
};

const createList = function(req, res){
   movies.create({
           name: req.body.name,
           type: req.body.type,
           director: req.body.director,
           year: req.body.year,
           description: req.body.description,
           rating:req.body.rating
   },
                (err, moviedata) => {
    if(err){
            res
            .status(404)
            .json(err);
        }
        else{
        res
        .status(201)
        .json(moviedata);
        }
   });
   };
                

const singleList = function (req, res) {
    movies
    .findById(req.params.movieid)
    .exec((err, moviedata) => {
    if (!moviedata) {
            return res
              .status(404)
              .json({
                "message": "movie not found"
            });
          } else if(err) {
            return res
              .status(200)
              .json(err);
          }
          res
            .status(200)
            .json(moviedata);
    });
};

const updateList = function (req, res){
    if (!req.params.movieid) {
        res
        .status(404)
        .json({
            "message": "Not found, movieid is required"
        });
    return;
    }
    movies.findById(req.params.movieid)
        .exec((err, moviedata) =>
             {
            if(!moviedata) {
                res
            .json(404)
            .status({
                    "message": "movieid not found"
                });
            return;
        } else if (err) {
            res
            .status(404)
            .json(err);
            return;
        }
                 moviedata.name = req.body.name;
                 moviedata.type = req.body.type;
                 moviedata.director = req.body.director;
                 moviedata.year = req.body.year;
                 moviedata.description = req.body.description;
                 moviedata.rating = req.body.rating;
                 moviedata.save((err, moviedata) => {
            if (err)
             {
                res
                .status(404)
                .json(err);
            }
            else {
                res
                .status(200)
                .json(moviedata);
            }
        });
    });
};

const deleteList = function (req, res){
   const movieid = req.params.movieid;
     if(movieid)
     {
         movies
      .findByIdAndRemove(movieid)
      .exec((err, moviedata) => {
      if(err) {
          res
          .status(404)
          .json(err);
      return;
      }
    res
    .status(204)
    .json(null);
    });
    }
    else {
        res
        .status(404)
        .json({"message": "No movieid"});
    }
};


module.exports = {
    getList,
    createList,
    singleList,
    updateList,
    deleteList
};
