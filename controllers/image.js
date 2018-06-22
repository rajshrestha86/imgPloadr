var fs=require('fs'),
path=require('path'),
sidebar=require('../helpers/sidebar'),
Models=require('../models'),
md5=require('MD5');

module.exports={

  index:function(req, res) {

  var viewModel ={
    image: {},
  comments: []
};

//  Getting an Image
console.log('Parameters: ' ,req.params.image_id);
  Models.Image.findOne({filename: {$regex: req.params.image_id}},
  function(err, image){
    //  Throwing encountered error.
    if (err) throw err;

    if(image) {
        image.views+=1;
        viewModel.image=image;
        image.save();
        //  Retrieveing comments for the particular Images
        Models.Comment.find({image_id: image._id}, {}, {sort: {'timestamp':1 }},
          function(err, comments) {
            if(err) throw err;
            viewModel.comments=comments;
            sidebar(viewModel, function(viewModel){
              res.render('image', viewModel);
            });
          }
        );
    } else {
      res.redirect('/');
    }
  });
  },

  // POST controller for file upload.
  create: function(req, res) {

    // res.send('The image: create POST controller');
    // res.redirect('/images/1');

    var saveImage=function()  {
      var possible='abcdefghijklmnopqrstuvwxyz0123456789'
      imgUrl= '';
    //
      for( var i=0; i<10; i+=1) {
        imgUrl+=possible.charAt(Math.floor(Math.random()*possible.length));
      }
    //  Search for an image with the same filename by performing a find:
    Models.Image.find({filename: imgUrl}, function(err, images){
        if(images.length>0) {
          saveImage();
        }
    });
      console.log('File path for the image: ', req.file.filename);
      var tempPath=req.file.path,
          ext=path.extname(req.file.originalname).toLowerCase(),
          targetPath=path.resolve('./public/uploads/temp/'+imgUrl + ext );

    //
          console.log('Extrension:::::',ext);
    //
      if (ext=='.jpg' || ext=='.png' || ext=='.jpeg' || ext=='.gif') {
        fs.rename(tempPath, targetPath, function (err){
            if (err) throw err;
            var newImg=new Models.Image({
                  title: req.body.title,
                  description: req.body.description,
                  filename: imgUrl+ext
            });
            newImg.save(function(err, image){
                console.log('Successfullt Inserted Image: '+image.filename);
                res.redirect('/images/'+image.uniqueId);
            });

        });
      } else {
        fs.unlink(tempPath, function() {
          if(err) throw err;
          res.json(500, {error: 'Only image files are allowed.'});
        });
      }

    };
    saveImage();
  },


  like: function(req, res) {
    Models.Image.findOne({
      filename: {$regex: req.params.image_id}
    }, function(err, image){
      if(!err && image) {
        image.likes+=1;
        image.save(function(err){
          if(err) res.json(err);
          else res.json({likes: image.likes});
        });
      }
    });

  },
  comment:function(req, res) {
    Models.Image.findOne({
      filename: { $regex: req.params.image_id}
    }, function(err, image){
      if(!err && image) {
        var newComment=new Models.Comment(req.body);
        newComment.gravatar=md5(newComment.email);
        newComment.image_id=image._id;
        newComment.save(function(err, comment){
          if(err) throw err;

          res.redirect('/images/'+image.uniqueId+'#'+comment._id);
        });
      } else res.redirect('/');
    });
  }
};
