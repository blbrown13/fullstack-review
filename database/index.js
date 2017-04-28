var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  id: Number,
  login: String,
  full_name: String,
  html_url: String,
  description: String
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;
