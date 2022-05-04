import { Author } from './author';

describe('Author', () => {
  it('is valid type', () => {
    const author: Author = {
      username: 'brad',
      url: 'https://www.codewars.com/users/bradtaniguchi'
    };
  });
});
