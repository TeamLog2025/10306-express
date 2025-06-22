const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('profile', {name: '김정원', age: 17, job: '개발자'});
});

app.listen(PORT, () => {    
    console.log(`서버 실행중:  http://localhost:${PORT}`);
});
