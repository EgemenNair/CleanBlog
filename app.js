import express from 'express';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  const blog = { id: 1, title: 'Blog title', description: 'Blog description' };
  res.send(blog);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
