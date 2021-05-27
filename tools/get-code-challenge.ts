import { CodewarsV1Api } from '../src/';

(async () => {
  try {
    const codewarsApi = new CodewarsV1Api();
    const [challenge] = process.argv.slice(2);
    if (!challenge) {
      throw new Error(
        'No challenge param given, pass challengeId or challenge-slug'
      );
    }
    const res = await codewarsApi.getCodeChallenge(challenge);
    console.log(JSON.stringify(res, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
