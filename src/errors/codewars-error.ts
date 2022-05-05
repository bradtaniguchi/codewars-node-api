import { CodewarsErrorCode } from '../constants/codewars-error-codes';

/**
 * Represents a generic Codewars error response when calling their API.
 */
export interface CodewarsError extends Error {
  /**
   * The HTTP code codewars provided.
   */
  code: CodewarsErrorCode;
  /**
   * The description of the error code.
   * See:
   * https://dev.codewars.com/#errors
   */
  meaning: string;
}
