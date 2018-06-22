var connect=require('connect'),
path=require('path'),
logger=require('morgan'),
bodyParser=require('body-parser'),
json=require('json'),
methodOverride=require('method-override'),
cookieParser=require('cookie-parser'),
static=require('serve-static'),
errorHandler=require('errorhandler'),
routes =require('./routes'),
moment=require('moment'),
exphbs=require('express-handlebars'),
multer=require('multer');


module.exports=function(app)
{
  // Handlebars for the dynamic pages
  app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views')+'/layouts',
    partialsDir: [app.get('views')+'/partials'],
    helpers: {
      timeago: function(timestamp) {
        return moment(timestamp).startOf('minute').fromNow();
      }
    }
  }).engine);
  app.set('view engine', 'handlebars');
// Using or specifying middlewares to use
 app.use(multer({ dest:path.join(__dirname, 'public/uploads/temp/')}).single('img'));
 app.use(logger('dev'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(methodOverride());
 // app.use(multer());
 app.use(cookieParser('some-secret-value-here'));
 app.use('/public/', static(path.join(__dirname, '../public')));
 if ('development'==app.get('env')){
   app.use(errorHandler());
 }

  routes.initialize(app);
  return app;
};
