const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use('/rss', require('./rss'));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on 5000');
});
