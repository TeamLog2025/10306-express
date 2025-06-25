const express = require('express');
const app = express();

const books = [];

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({ extends: true}));

app.get('/', (req, res) => {
  res.render('index', { books });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const {  title, author, year} = req.body;
  books.push({ title, author, year });
  res.redirect('/');
});

app.get('/book/:title', (req, res) => {
  const title = req.params.title;
  const book = books.find(book => book.title === title);

  if (book) {
    res.render('book', { book });
  } else {
    res.status(404).send('게시글을 찾을 수 없습니다.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});
