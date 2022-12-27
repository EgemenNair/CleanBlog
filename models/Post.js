const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  title: String,
  username: {
    type: String,
    default: 'Anonymous',
  },
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Create Model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
