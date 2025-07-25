const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('weather', {temperature: 17, condition: "맑음"});
});

app.listen(PORT, () => {    
    console.log(`서버 실행중:  http://localhost:${PORT}`);
});
