import { CodeChallengeRank } from './code-challenge-rank';

describe('CodeChallengeRank', () => {
  it('is valid type', () => {
    const rank: CodeChallengeRank = {
      id: -4,
      name: '4 kyu',
      color: 'blue'
    };
  });
});
