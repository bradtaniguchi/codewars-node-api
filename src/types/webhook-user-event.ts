import { WebhookUserActions } from '../constants';

/**
 * Type representing the webhook user events
 *
 * TODO: add rank vs honor_changed versions
 */
export interface WebhookUserEvent {
  /**
   * The action that triggered this webhook
   */
  action: WebhookUserActions;

  /**
   * The user that was affected by the action
   */
  user: {
    /**
     * The id of the user
     */
    id: string;
  };
}
