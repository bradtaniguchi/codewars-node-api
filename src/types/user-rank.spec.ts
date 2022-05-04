import { UserRank } from './user-rank';

describe('UserRank', () => {
  it('is valid type', () => {
    const rank: UserRank = {
      rank: -3,
      name: '3 kyu',
      color: 'blue',
      score: 1819
    };
  });
});
