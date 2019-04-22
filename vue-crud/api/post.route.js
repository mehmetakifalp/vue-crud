const express = require('express');
const postRoutes = express.Router();

let Post = require('./post.model');

postRoutes.route('/add').post(function(req, res){
    let post = new Post(req.body);
    post.save()
        .then(() => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(() => {
            res.status(400).send('unable to save to db');
        });
});

postRoutes.route('/edit/:id').get(function(req, res){
    let id = req.params.id;

    Post.findById(id, function(err, post){
        if(err){
            res.json(err);
        }
        res.json(post);
    });
});

postRoutes.route('/delete/:id').delete(function (get, res){
    Post.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err) res.json(err);
        else res.json('Successfuly removed');
    });
});

module.exports = postRoutes;