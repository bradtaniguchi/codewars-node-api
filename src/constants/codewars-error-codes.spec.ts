import { CODEWARS_ERROR_CODES } from './codewars-error-codes';

describe('CODEWARS_ERROR_CODES', () => {
  it('does not have duplicates', () => {
    const unique = new Set(CODEWARS_ERROR_CODES);
    expect(unique.size).toEqual(CODEWARS_ERROR_CODES.length);
  });

  it('is all numbers', () => {
    expect(
      CODEWARS_ERROR_CODES.every((code) => typeof code === 'number')
    ).toBeTruthy();
  });
});
