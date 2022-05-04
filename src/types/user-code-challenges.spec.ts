import { UserCodeChallenges } from './user-code-challenges';

describe('UserCodeChallenges', () => {
  it('is valid type', () => {
    const challenges: UserCodeChallenges = {
      totalAuthored: 3,
      totalCompleted: 230
    };
  });
});
