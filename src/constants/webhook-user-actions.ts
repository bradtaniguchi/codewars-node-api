/**
 * Static list of all currently known webhook user actions.
 *
 * Represented as type `WebhookUserActions`
 *
 * Further documentation is here:
 * https://dev.codewars.com/?shell#user
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
 */
export type WebhookUserActions = (typeof WEBHOOK_USER_ACTIONS)[number];
