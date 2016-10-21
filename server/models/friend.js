var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
	user: {type: String, required : true, minlength: 2},
	score: {type: String, required : true},
	percentage: {type: Number, required : true}
}, {timestamps: true});
var Friend = mongoose.model('Friend', FriendSchema);