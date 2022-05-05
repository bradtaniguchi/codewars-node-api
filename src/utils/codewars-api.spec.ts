import { CodewarsNotFound } from '../errors/codewars-errors';
import { CodewarsV1Api } from './codewars-api';

describe('CodewarsApi', () => {
  // I'll use my own account, and write tests in a way to support
  // any future changes to my user's data.
  const TEST_USERNAME = 'bradtaniguchi';
  let cwApi: CodewarsV1Api;

  beforeEach(() => {
    cwApi = new CodewarsV1Api();
  });

  it('provides BASE_URL as a static property', () => {
    expect(CodewarsV1Api.BASE_URL).toEqual('https://www.codewars.com/api/v1');
  });

  describe('getUser', () => {
    it('returns user', async () => {
      const user = await cwApi.getUser(TEST_USERNAME);
      expect(user.username).toBe(TEST_USERNAME);
    });
    it('throws error if username not found', async () => {
      expect.assertions(1);
      try {
        await cwApi.getUser(
          TEST_USERNAME + TEST_USERNAME + TEST_USERNAME + TEST_USERNAME
        );
      } catch (e) {
        expect(e).toEqual(new CodewarsNotFound('Codewars API error occurred'));
      }
    });
  });

  describe('getCompletedChallenges', () => {
    it('returns code-challenges', async () => {
      const challenges = await cwApi.getCompletedChallenges(TEST_USERNAME);
      expect(Array.isArray(challenges.data)).toBeTruthy();
      expect(typeof challenges.totalItems).toEqual('number');
      expect(typeof challenges.totalPages).toEqual('number');
    });
    it('returns code-challenges with pagination', async () => {
      const challenges = await cwApi.getCompletedChallenges(TEST_USERNAME, 2);
      expect(Array.isArray(challenges.data)).toBeTruthy();
      expect(typeof challenges.totalItems).toEqual('number');
      expect(typeof challenges.totalPages).toEqual('number');
    });
    it('throws error if username not found', async () => {
      expect.assertions(1);
      try {
        await cwApi.getCompletedChallenges(TEST_USERNAME + TEST_USERNAME);
      } catch (e) {
        expect(e).toEqual(new CodewarsNotFound('Codewars API error occurred'));
      }
    });
  });

  describe('getAuthoredChallenges', () => {
    it('returns authored challenges', async () => {
      const challenges = await cwApi.getAuthoredChallenges(TEST_USERNAME);
      expect(Array.isArray(challenges.data)).toBeTruthy();
    });
    it('throws error if username not found', async () => {
      expect.assertions(1);
      try {
        await cwApi.getAuthoredChallenges(TEST_USERNAME + TEST_USERNAME);
      } catch (e) {
        expect(e).toEqual(new CodewarsNotFound('Codewars API error occurred'));
      }
    });
  });

  describe('getCodeChallenge', () => {
    it('returns code challenge', async () => {
      // This is the event-or-odd challenge
      //see: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
      const challenge = await cwApi.getCodeChallenge(
        '53da3dbb4a5168369a0000fe'
      );
      expect(challenge).toEqual(
        expect.objectContaining({
          id: '53da3dbb4a5168369a0000fe',
          name: 'Even or Odd',
          slug: 'even-or-odd'
        })
      );
    });
    it('throws error if challenge not found', async () => {
      expect.assertions(1);
      try {
        await cwApi.getCodeChallenge(TEST_USERNAME + TEST_USERNAME);
      } catch (e) {
        expect(e).toEqual(new CodewarsNotFound('Codewars API error occurred'));
      }
    });
  });
});
