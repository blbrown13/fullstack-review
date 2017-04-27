import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

var json = require('../../data.json');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: json
    }
    this.search = this.search.bind(this)
  }

  search (term) {
    console.log(`${term} was searched`);
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
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
