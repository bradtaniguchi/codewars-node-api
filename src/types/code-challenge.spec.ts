import { CodeChallenge } from './code-challenge';

describe('CodeChallenge', () => {
  it('is valid type', () => {
    const challenge: CodeChallenge = {
      id: '5277c8a221e209d3f6000b56',
      name: 'Valid Braces',
      slug: 'valid-braces',
      url: 'http://www.codewars.com/kata/valid-braces',
      category: 'algorithms',
      description:
        'Write a function called `validBraces` that takes a string ...',
      tags: ['Algorithms', 'Validation', 'Logic', 'Utilities'],
      languages: ['javascript', 'coffeescript'],
      rank: {
        id: -4,
        name: '4 kyu',
        color: 'blue'
      },
      createdBy: {
        username: 'xDranik',
        url: 'http://www.codewars.com/users/xDranik'
      },
      approvedBy: {
        username: 'xDranik',
        url: 'http://www.codewars.com/users/xDranik'
      },
      totalAttempts: 4911,
      totalCompleted: 919,
      totalStars: 12,
      voteScore: 512,
      publishedAt: '2013-11-05T00:07:31Z',
      approvedAt: '2013-12-20T14:53:06Z',

      // **Note** This can be optional, will be changed in the future
      contributorsWanted: false
    };
  });
});
