/**
 * The array of http response error-codes the codewars api can return.
 *
 * @see {@link CodewarsError}
 */
export const CODEWARS_ERROR_CODES = Object.freeze([
  400, 401, 403, 404, 405, 406, 422, 429, 500, 503
] as const);

/**
 * The type of http response codes the codewars api can return.
 *
 * @see {@link CODEWARS_ERROR_CODES}
 */
export type CodewarsErrorCode = (typeof CODEWARS_ERROR_CODES)[number];

/**
 * Type-guard that can be used to verify if the given code is a codewars http response codes.
 *
 * @see {@link CODEWARS_ERROR_CODES}
 * @see {@link CodewarsErrorCode}
 *
 * @param code the code to check, will also verify if a number
 * @returns true if the given code is a codewars http response codes
 */
export const isCodewarsErrorCode = (code: unknown): code is CodewarsErrorCode =>
  typeof code === 'number' &&
  CODEWARS_ERROR_CODES.includes(code as CodewarsErrorCode);
