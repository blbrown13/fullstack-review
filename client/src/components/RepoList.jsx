import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>
      {props.repos.map((repo) =>
        <div>
          <div> {repo.full_name} </div>
          <div> {repo.description} </div>
        </div>
      )}
    </div>
  </div>
)

export default RepoList;
