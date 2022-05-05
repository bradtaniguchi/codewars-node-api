import { CodewarsErrorCode } from '../constants/codewars-error-codes';
import { CodewarsError } from './codewars-error';

export class CodewarsBadRequest extends Error implements CodewarsError {
  public static readonly code = 400 as CodewarsErrorCode;
  public readonly meaning = 'Bad Request -- Something went wrong';
}

export class CodewarsUnauthorized extends Error implements CodewarsError {
  public static readonly code = 401 as CodewarsErrorCode;
  public readonly meaning = 'Unauthorized -- Your API key is wrong';
}

export class CodewarsForbidden extends Error implements CodewarsError {
  public static readonly code = 403 as CodewarsErrorCode;
  public readonly meaning =
    'Forbidden -- You do not have permission to access this resource';
}

export class CodewarsNotFound extends Error implements CodewarsError {
  public static readonly code = 404 as CodewarsErrorCode;
  public readonly meaning =
    'Not Found -- The specified resource could not be found';
}

export class CodewarsMethodNotAllowed extends Error implements CodewarsError {
  public static readonly code = 405 as CodewarsErrorCode;
  public readonly meaning =
    'Method Not Allowed -- You tried to access a resource with an invalid method';
}

export class CodewarsNotAcceptable extends Error implements CodewarsError {
  public static readonly code = 406 as CodewarsErrorCode;
  public readonly meaning =
    "Not Acceptable -- You requested a format that isn't json";
}

export class CodewarsUnprocessableEntity
  extends Error
  implements CodewarsError
{
  public static readonly code = 422 as CodewarsErrorCode;
  public readonly meaning =
    'Unprocessable Entity -- Your input failed validation.';
}

export class CodewarsTooManyRequests extends Error implements CodewarsError {
  public static readonly code = 429 as CodewarsErrorCode;
  public readonly meaning =
    "Too Many Requests -- You're making too many API requests.";
}

export class CodewarsInternalServerError
  extends Error
  implements CodewarsError
{
  public static readonly code = 500 as CodewarsErrorCode;
  public readonly meaning =
    'Internal Server Error -- We had a problem with our server. Try again later.';
}

export class CodewarsServiceUnavailable extends Error implements CodewarsError {
  public static readonly code = 503 as CodewarsErrorCode;
  public readonly meaning =
    "Service Unavailable -- We're temporarily offline for maintenance. Please try again later.";
}

export class CodewarsUnknownError extends Error implements CodewarsError {
  public readonly meaning = 'Unknown error occurred';
}
