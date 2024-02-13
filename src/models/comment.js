// models/comment.js

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Put',
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  Comment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
