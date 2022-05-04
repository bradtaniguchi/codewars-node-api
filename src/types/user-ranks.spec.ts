import { UserRanks } from './user-ranks';

describe('UserRanks', () => {
  it('is valid type', () => {
    const ranks: UserRanks = {
      overall: {
        rank: -3,
        name: '3 kyu',
        color: 'blue',
        score: 2116
      },
      languages: {
        javascript: {
          rank: -3,
          name: '3 kyu',
          color: 'blue',
          score: 1819
        },
        ruby: {
          rank: -4,
          name: '4 kyu',
          color: 'blue',
          score: 1005
        },
        coffeescript: {
          rank: -4,
          name: '4 kyu',
          color: 'blue',
          score: 870
        }
      }
    };
  });
});
