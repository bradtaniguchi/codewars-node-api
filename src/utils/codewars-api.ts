import * as https from 'https';
import { AuthoredChallengeResponse } from '../types/authored-challenge-response';
import { CodeChallenge } from '../types/code-challenge';
import { CompletedChallengeResponse } from '../types/completed-challenge-response';
import { User } from '../types/user';

/**
 * Class to interface with the codewars v1 public api.
 */
export class CodewarsV1Api {
  /**
   * The base URL for the API
   */
  public static readonly BASE_URL = `https://www.codewars.com/api/v1`;
  constructor() {}

  /**
   * Internal method to make https get requests.
   */
  private async _request<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) =>
      https
        .get(url, (res) => {
          console.log('status code', res.statusCode);
          console.log('headers', res.headers);
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => resolve(JSON.parse(data)));
        })
        .on('error', reject)
    );
  }

  /**
   * Return the user for the given username or userId
   * @param user the username or userId
   * @returns the user
   */
  public getUser(user: string): Promise<User> {
    const url = `${CodewarsV1Api.BASE_URL}/users/${user}`;
    return this._request(url);
  }

  /**
   * Returns the list of completed challenges for the given user.
   * @param user the username or userId
   * @param page the page offset,
   * @returns response object with number of pages, items and data.
   */
  public getCompletedChallenges(
    user: string,
    page = 0
  ): Promise<CompletedChallengeResponse> {
    const url = `${CodewarsV1Api.BASE_URL}/users/${user}/code-challenges/completed?page=${page}`;
    return this._request(url);
  }

  /**
   * Returns the list of challenges authored by the user.
   * @param user the username or userId
   * @returns response object with the data
   */
  public getAuthoredChallenges(
    user: string
  ): Promise<AuthoredChallengeResponse> {
    const url = `${CodewarsV1Api.BASE_URL}/users/${user}/code-challenges/authored`;
    return this._request(url);
  }

  /**
   * Returns the code challenge.
   * @param challenge the challengeId or the challenge slug
   * @returns code challenge
   */
  public getCodeChallenge(challenge: string): Promise<CodeChallenge> {
    const url = `${CodewarsV1Api.BASE_URL}/code-challenges/${challenge}`;
    return this._request(url);
  }
}
