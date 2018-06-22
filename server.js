var express=require('express'),
config=require('./server/config'),
app=express(),
mongoose=require('mongoose');
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname+'/views');
console.log(app.get('views'));
app=config(app);
mongoose.connect('mongodb://localhost/imgPloadr');
mongoose.connection.on('open', function(){
  console.log('Mongoose Connected');
});
var server=app.listen(app.get('port'), function()
{
  console.log('Server up: http://localhost:'+app.get('port'));
  console.log('Views: '+app.get('views'));
});
