import { AuthoredChallengeResponse } from './authored-challenge-response';

describe('AuthoredChallengeResponse', () => {
  it('is valid type', () => {
    const res: AuthoredChallengeResponse = {
      data: [
        {
          id: '5571d9fc11526780a000011a',
          name: 'The builder of things',
          description:
            'For this kata you will be using some meta-programming ...',
          rank: -3,
          rankName: '3 kyu',
          tags: [
            'Algorithms',
            'Metaprogramming',
            'Programming Paradigms',
            'Advanced Language Features',
            'Fundamentals',
            'Domain Specific Languages',
            'Declarative Programming'
          ],
          languages: ['ruby', 'javascript', 'python', 'coffeescript']
        }
      ]
    };
  });
});
