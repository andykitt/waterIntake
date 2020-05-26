const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const data = require('./routes/data.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

const db = require('./config/keys').mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true, dbName: (process.env.MONGODB_DBNAME ? process.env.MONGODB_DBNAME : undefined) }
  )
  .then(() => console.log(`Connected to MongoDB...`))
  .catch(err => console.log('DATABASE ERROR', err));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // join all files accept /api

  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
  console.log('Serving React App...');
}

const port = process.env.PORT || 5000;

app.use('/api/data', data);

app.listen(port, () => console.log(`Server running on port ${port}...`));
