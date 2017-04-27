import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <div>-------------------------------</div>
    <div>
      {props.repos.map((repo, index) =>
        <div key={index}>
          <div>{index}</div><div> {repo.full_name} </div>
          <div> {repo.description} </div>
          <div>-------------------------------</div>
        </div>
      )}
    </div>
  </div>
)

export default RepoList;
