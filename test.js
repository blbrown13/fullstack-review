console.log('#APP has started...');
// fs.readFile();
// var repoData = JSON.stringify(json[0]);
var repoData = json[0];
var strOne = `name: ${repoData.name} full_name: ${repoData.full_name} \nurl:${repoData.url}`;
var strTwo = `description: ${repoData.description}`;
console.log(`${strOne}\n${strTwo}`);
// console.log(JSON.stringify(json));

// repos.length++;
