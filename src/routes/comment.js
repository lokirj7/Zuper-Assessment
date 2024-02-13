// routes/comment.js



const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user')

// Add a new comment to an existing post
router.put('/:user', async (req, res) => {
  const { postId, comment } = req.body;
const user=req.params.user;
  if (!postId || !comment || !user) {
    return res.status(400).json({ error: 'postId and comments and specified user are required fields' });
  }

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Assuming 'comments' is an array field in the Post model
    post.comments.push({ user,comment });

    await post.save();

    res.json(post);
  } catch (error) {
    console.error('Error adding comment to post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// get all posts
router.get('/:user', async (req, res) => {
  const username = req.params.user; // Assuming you're searching by username

  try {
    const foundUser = await User.findOne({ username }); // Pass the query criteria as an object
    if (!foundUser) {
      return res.status(400).json({ error: 'User is not signed up' });
    }
    const posts = await Post.find({});
    res.json(posts); // Return the found user
  } catch (err) {
    console.error('Error finding user:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
