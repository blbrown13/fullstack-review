import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

// require json file
var json = require('../../data.json');
// import example data set of repos
  // map imported example data
  // render in client


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: json
    }
    console.log('#APP has started...');
    // fs.readFile();
    // var repoData = JSON.stringify(json[0]);
    var repoData = json[0];
    var strOne = `name: ${repoData.name} full_name: ${repoData.full_name} \nurl:${repoData.url}`;
    var strTwo = `description: ${repoData.description}`;
    console.log(`${strOne}\n${strTwo}`);
    // console.log(JSON.stringify(json));
  }

  search (term) {
    console.log(`${term} was searched`);
    // repos.length++;
    // TODO
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:1128/repos/import",
      dataType : "text",
      contentType: "application/json; charset=utf-8",
      success : (result) => {
        alert(result);
        this.setState({
          repos: json
        })
      },
      error: function(error) {
        alert(error);
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
