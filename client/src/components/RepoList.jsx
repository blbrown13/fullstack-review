import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>-------------------------------</div>
    <div>
      {props.repos.map((repo, index) =>
        <div key={repo.id}>
          <div>{repo.id}</div>
          <div> {repo.login} </div>
          <div> {repo.full_name} </div>
          <div> {repo.html_url} </div>
          <div> {repo.description} </div>
          <div>-------------------------------</div>
        </div>
      )}
    </div>
  </div>
)

export default RepoList;
