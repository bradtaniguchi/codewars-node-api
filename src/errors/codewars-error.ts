import { CodewarsErrorCode } from '../constants/codewars-error-codes';

/**
 * Represents a generic Codewars error response when calling their API.
 */
export abstract class CodewarsError extends Error {
  /**
   *
   * @see {@link CodewarsErrorCode}
   *
   * @param message The will be the description of the error.
   * See: https://dev.codewars.com/#errors
   * @param code the code of the error, if available
   */
  constructor(message: string, public code?: CodewarsErrorCode) {
    super(message);
  }
}
