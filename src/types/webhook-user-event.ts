import { WebhookUserActions } from '../constants';

/**
 * Type representing the generic webhook user events
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

export interface WebhookUserRankEarnedEvent extends WebhookUserEvent {
  action: 'rank_earned';
  /**
   * The user that was affect by the action
   */
  user: {
    id: string;
    /**
     * The rank that the user earned, could be language or global rank
     */
    rank: number;
  };
}

export interface WebhookUserHonorChangedEvent extends WebhookUserEvent {
  action: 'honor_changed';
  /**
   * The user that was affect by the action
   */
  user: {
    id: string;
    /**
     * The overall honor the user has
     */
    honor: number;
    /**
     * The change in honor the user has had (usually in a positive direction)
     */
    honor_delta: number;
  };
}
