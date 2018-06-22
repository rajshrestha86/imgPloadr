var mongoose=require('mongoose'),
Schema=mongoose.Schema,
ObjectId=Schema.ObjectId;

var CommentSchema=new Schema({
  image_id: {type: ObjectId},
  email: {type: String},
  name: {type: String},
  gravatar: {type: String},
  comment: {type: String},
  timestamp: {type: Date, 'default': Date.now}
});

CommentSchema.virtual('image').set((image)=>{
  this._image=image;
}).get(()=>{
  return this._image;
});

module.exports=mongoose.model('Comment', CommentSchema);
