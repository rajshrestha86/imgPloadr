var mongoose=require('mongoose'),
Schema=mongoose.Schema;

var dist=new Schema({
    district: {type: String},
    no_of_Hor: {type: Number},
    no_of_prov:{type: Number}

});

module.exports=mongoose.model('Dist', dist);