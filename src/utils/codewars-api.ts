import * as https from 'https';
import { isCodewarsErrorCode } from '../constants/codewars-error-codes';
import { CodewarsUnknownError } from '../errors/codewars-errors';
import { createCodewarsError } from '../errors/create-codewars-error';
import { AuthoredChallengeResponse } from '../types/authored-challenge-response';
import { CodeChallenge } from '../types/code-challenge';
import { CompletedChallengeResponse } from '../types/completed-challenge-response';
import { User } from '../types/user';

/**
 * Main interface class to interface with the codewars v1 public api.
 *
 *
 * @example
 *
 * ```typescript
 * import { CodewarsV1Api } from 'codewars-node-api';
 *
 * const cwApi = new CodewarsV1Api();
 *
 * const userId = 'bradtaniguchi';
 *  cwApi.getUser(userId).then((user) => {
 * console.log(user.name); // Brad
 * });
 * ```
 */
export class CodewarsV1Api {
  /**
   * The base URL for the API
   */
  public static readonly BASE_URL = `https://www.codewars.com/api/v1`;
  constructor() {}

  /**
   * Internal method to make https get requests using the https nodejs module.
   *
   * https://nodejs.org/api/https.html
   */
  private async _request<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) =>
      https
        .get(url, (res) => {
          if (isCodewarsErrorCode(res.statusCode)) {
            const err = createCodewarsError(res.statusCode);
            if (!err) {
              // This is an unknown status code,
              return reject(
                new CodewarsUnknownError(
                  'Unknown Codewars API error occurred',
                  res.statusCode
                )
              );
            }
            return reject(err);
          }

          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => resolve(JSON.parse(data)));
        })
        .on('error', () => {
          reject(
            new CodewarsUnknownError('Unknown Codewars API error occurred')
          );
        })
    );
  }

  /**
   * Return the user for the given username or userId.
   * Will throw a {@link CodewarsError} depending on the non-200 response status code.
   * @param user the username or userId
   * @returns the user found relative to the username or userId.
   */
  public getUser(user: string): Promise<User> {
    const url = `${CodewarsV1Api.BASE_URL}/users/${user}`;
    return this._request(url);
  }

  /**
   * Returns the list of completed challenges for the given user.
   * Will throw a {@link CodewarsError} depending on the non-200 response status code.
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
   * Will throw a {@link CodewarsError} depending on the non-200 response status code.
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
   * Will throw a {@link CodewarsError} depending on the non-200 response status code.
   * @param challenge the challengeId or the challenge slug
   * @returns code challenge
   */
  public getCodeChallenge(challenge: string): Promise<CodeChallenge> {
    const url = `${CodewarsV1Api.BASE_URL}/code-challenges/${challenge}`;
    return this._request(url);
  }
}
