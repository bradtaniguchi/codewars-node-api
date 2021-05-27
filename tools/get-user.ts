import { CodewarsV1Api } from '../src/';
(async () => {
  try {
    const codewarsApi = new CodewarsV1Api();
    const [user] = process.argv.slice(2);
    if (!user) {
      throw new Error('No user param given, pass username or userId');
    }
    const res = await codewarsApi.getUser(user);
    console.log(JSON.stringify(res, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
