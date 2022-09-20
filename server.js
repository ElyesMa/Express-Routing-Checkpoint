const express = require('express');
const app = express();
const appRoutes = require('./routes/appRoutes');

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.json());
app.use(express.static(__dirname+'/views'));
app.use('/', appRoutes);

app.listen(3000, (err) =>
  err ? console.log(err) : console.log("server is running on port 3000")
);
