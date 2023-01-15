const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejs = require('ejs');
const path = require('path');

const Post = require('./models/Post');

const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

// Connect to DB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://egemen:cWqrYtZFJaaxYch1@cluster0.c0klgy6.mongodb.net/clean-blog?retryWrites=true&w=majority');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method',  {
  methods: ['POST', 'GET'],
}));

// Routes
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/posts/edit/:id', pageController.getEditPage);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Clean Blog listening on port ${port}`);
});
