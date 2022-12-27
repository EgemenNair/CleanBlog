import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
import ejs from 'ejs';
import path from 'path';


const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

// Routes
app.get('/+(index.html)?', (req, res) => {
  res.render('index');
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

const port = 3000;
app.listen(port, () => {
  console.log(`Clean Blog listening on port ${port}`);
});
