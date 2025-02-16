/**
 * Static list of all currently known webhook user actions.
 *
 * Represented as type `WebhookUserActions`
 *
 * Further documentation is here:
 * https://dev.codewars.com/?shell#user
 *
 * @see {@link WebhookUserActions}
 */
export const WEBHOOK_USER_ACTIONS = Object.freeze([
  'rank_earned',
  'honor_changed'
] as const);

/**
 * Type representing all the webhook user actions.
 *
 * - rank_earned - The user's rank has been upgraded. Could be a global rank, or a language rank
 * - honor_changed - User's honor changed (usually in a positive direction)
 * @see {@link WEBHOOK_USER_ACTIONS}
 */
export type WebhookUserActions = (typeof WEBHOOK_USER_ACTIONS)[number];

/**
 * Type-guard that can be used to verify if the given action is a webhook user action.
 *
 * @see {@link WEBHOOK_USER_ACTIONS}
 * @see {@link WebhookUserActions}
 *
 * @param action the action to check, will also verify if string
 * @returns true if the given action is a webhook user action
 */
export const isWebhookUserAction = (
  action: unknown
): action is WebhookUserActions =>
  typeof action === 'string' &&
  WEBHOOK_USER_ACTIONS.includes(action as WebhookUserActions);
