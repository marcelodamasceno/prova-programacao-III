const express = require("express");
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://misso:2000jose@cluster0-duzvd.mongodb.net/participantes?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.json());
app.use(routes);

app.listen(3500);