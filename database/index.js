var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  id: NUMBER,
  login: STRING,
  full_name: STRING,
  url: STRING,
  description: STRING
});

var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;
