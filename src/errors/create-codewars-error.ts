import { CodewarsErrorCode } from '../constants/codewars-error-codes';
import { CodewarsError } from './codewars-error';
import {
  CodewarsBadRequest,
  CodewarsForbidden,
  CodewarsInternalServerError,
  CodewarsMethodNotAllowed,
  CodewarsNotAcceptable,
  CodewarsNotFound,
  CodewarsServiceUnavailable,
  CodewarsTooManyRequests,
  CodewarsUnauthorized,
  CodewarsUnprocessableEntity
} from './codewars-errors';

/**
 * Utility function that returns the corresponding codewars error based on the
 * error-code.
 */
export const createCodewarsError = (
  code: CodewarsErrorCode,
  message?: string
): CodewarsError | undefined => {
  const errClass = {
    [CodewarsBadRequest.code]: CodewarsBadRequest,
    [CodewarsUnauthorized.code]: CodewarsUnauthorized,
    [CodewarsForbidden.code]: CodewarsForbidden,
    [CodewarsNotFound.code]: CodewarsNotFound,
    [CodewarsMethodNotAllowed.code]: CodewarsMethodNotAllowed,
    [CodewarsNotAcceptable.code]: CodewarsNotAcceptable,
    [CodewarsUnprocessableEntity.code]: CodewarsUnprocessableEntity,
    [CodewarsTooManyRequests.code]: CodewarsTooManyRequests,
    [CodewarsInternalServerError.code]: CodewarsInternalServerError,
    [CodewarsServiceUnavailable.code]: CodewarsServiceUnavailable
  }[code];
  if (!errClass) return;
  return new errClass(message);
};
