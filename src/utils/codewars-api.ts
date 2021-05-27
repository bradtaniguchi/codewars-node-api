import * as https from 'https';
import { User } from '../types/user';

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
   */
  public getUser(user: string): Promise<User> {
    const url = `${CodewarsV1Api.BASE_URL}/users/${user}`;
    return this._request(url);
  }
}
