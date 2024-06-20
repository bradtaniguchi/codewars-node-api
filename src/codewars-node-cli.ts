import { program } from 'commander';
import { CodewarsV1Api } from './utils/codewars-api';

/**
 * Executes an async command with generic handling, used for the commanderjs
 * cli calls. Logs responses automatically assuming they are JSON.
 *
 * @param cb async callback to execute
 */
async function executeAsync(cb: () => Promise<unknown>) {
  try {
    const res = await cb();
    console.log(JSON.stringify(res, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

program
  .name('codewars-node-cli')
  .description('codewars cli tool used to interact with the codewars api');
// TODO: reliable load version from package.json, needs testing.

const userCommandGroup = program
  .command('user')
  .description('interact with the user api');

userCommandGroup
  .command('get')
  .description('get the user based on the given username or userId')
  .argument('<user>', 'username or userId')
  .action((user: string) =>
    executeAsync(() => new CodewarsV1Api().getUser(user))
  );

const challengesCommandGroup = program
  .command('challenges')
  .description('interact with the challenge api');

challengesCommandGroup
  .command('get')
  .description(
    'Get a single challenge based on its challengeId or challenge-slug'
  )
  .argument('<challenge>', 'challengeId or challenge-slug')
  .action((challengeId: string) =>
    executeAsync(() => new CodewarsV1Api().getCodeChallenge(challengeId))
  );

challengesCommandGroup
  .command('authored')
  .description('Get the authored challenges for the given user')
  .argument('<user>', 'username or userId')
  .action((user: string) =>
    executeAsync(() => new CodewarsV1Api().getAuthoredChallenges(user))
  );

challengesCommandGroup
  .command('completed')
  .description(
    'gets the completed challenges for the given user, with pagination'
  )
  .argument('<user>', 'username or userId')
  .option('-p, --page <page>', 'page number to get', '0')
  .action((user: string, { page }: { page: string }) =>
    executeAsync(() => new CodewarsV1Api().getCompletedChallenges(user, +page))
  );

program.parse();
