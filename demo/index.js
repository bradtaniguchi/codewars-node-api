const { CodewarsV1Api } = require('codewars-node-api');

const cwApi = new CodewarsV1Api();

const userId = 'bradtaniguchi';
cwApi.getUser(userId).then((user) => {
  console.log(user.name); // Brad
});
