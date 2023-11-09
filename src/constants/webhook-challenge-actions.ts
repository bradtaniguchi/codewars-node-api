/**
 * Static list of all currently known webhook challenge actions.
 *
 * **note** not sure if `updated` is a value, as its not documented.
 *
 * Represented as type `WebhookChallengeActions`
 *
 * Further documentation is here:
 * https://dev.codewars.com/?shell#code-challenges
 *
 *
 */
export const WEBHOOK_CHALLENGE_ACTIONS = Object.freeze([
  'created',
  'approved',
  'voted',
  'solution_finalized'
] as const);

/**
 * Type representing all the webhook challenge actions.
 *
 * - created - Code challenge was created
 * - approved - Code challenge was successfully approved (no longer in beta state)
 * - voted - Someone voted on the code challenge. Does not specify what type of vote
 * - solution_finalized - Someone submitted a solution to the code challenge
 */
export type WebhookChallengeActions =
  (typeof WEBHOOK_CHALLENGE_ACTIONS)[number];
