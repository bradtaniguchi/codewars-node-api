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
 * @see {@link WebhookChallengeActions}
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
 * @see {@link WEBHOOK_CHALLENGE_ACTIONS}
 */
export type WebhookChallengeActions =
  (typeof WEBHOOK_CHALLENGE_ACTIONS)[number];

/**
 * Type-guard that can be used to verify if the given action is a webhook challenge action.
 *
 * @see {@link WEBHOOK_CHALLENGE_ACTIONS}
 * @see {@link WebhookChallengeActions}
 *
 * @param action the action to check, will also verify if string
 * @returns true if the given action is a webhook challenge action
 */
export const isWebhookChallengeAction = (
  action: unknown
): action is WebhookChallengeActions =>
  typeof action === 'string' &&
  WEBHOOK_CHALLENGE_ACTIONS.includes(action as WebhookChallengeActions);
