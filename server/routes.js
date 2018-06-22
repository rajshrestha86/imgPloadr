var home=require('../controllers/home'),
image=require('../controllers/image'),
form=require('../controllers/form'),
multer=require('multer');

var upload=multer({dest: 'temp/'});

module.exports.initialize=function(app) {
  app.get('/', home.index);
  app.get('/form', form.home);
  app.post('/form/save', form.store);
  app.get('/images/:image_id', image.index);
  app.post('/images',  image.create);
  app.post('/images/:image_id/like', image.like);
  app.post('/images/:image_id/comment', image.comment);
  };
