import { CodewarsV1Api } from '../src/';

(async () => {
  try {
    const codewarsApi = new CodewarsV1Api();
    const [user, rawPage] = process.argv.slice(2);
    if (!user) {
      throw new Error('No user param given, pass username or userId');
    }
    const page = (rawPage && Number(rawPage)) || 0;
    const res = await codewarsApi.getCompletedChallenges(user, page);
    console.log(JSON.stringify(res, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
