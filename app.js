const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');
const path = require('path');

const Post = require('./models/Post');

const app = express();

// Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/+(index.html)?', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});
app.get('/about.html', (req, res) => {
  res.render('about');
});
app.get('/post.html', (req, res) => {
  res.render('post');
});
app.get('/add_post.html', (req, res) => {
  res.render('add_post');
});

app.post('/posts', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Clean Blog listening on port ${port}`);
});
