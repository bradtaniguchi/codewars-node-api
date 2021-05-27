import * as https from 'https';
import {
  AuthoredChallengeResponse,
  CompletedChallengeResponse,
  User
} from '..';

/**
 * Class to interfacace with the codewars v1 public api.
 */
export class CodewarsV1Api {
  /**
   * The base URL for the API
   */
  public static readonly BASE_URL = `https://www.codewars.com/api/v1`;
  constructor() {}

  /**
   * Internal method to make https get requests.
   * TODO: throw error if bad headers
   */
  private async _request<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) =>
      https
        .get(url, (res) => {
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
}
