import { CodewarsErrorCode } from '../constants/codewars-error-codes';
import { CodewarsError } from './codewars-error';

export class CodewarsBadRequest extends Error implements CodewarsError {
  public readonly code = 400 as CodewarsErrorCode;
  public readonly meaning = 'Bad Request -- Something went wrong';
}

export class CodewarsUnauthorized extends Error implements CodewarsError {
  public readonly code = 401 as CodewarsErrorCode;
  public readonly meaning = 'Unauthorized -- Your API key is wrong';
}

export class CodewarsForbidden extends Error implements CodewarsError {
  public readonly code = 403 as CodewarsErrorCode;
  public readonly meaning =
    'Forbidden -- You do not have permission to access this resource';
}

export class CodewarsNotFound extends Error implements CodewarsError {
  public readonly code = 404 as CodewarsErrorCode;
  public readonly meaning =
    'Not Found -- The specified resource could not be found';
}

// TODO:
