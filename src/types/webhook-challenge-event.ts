import { WebhookChallengeActions } from '../constants';
import { CodeChallenge } from './code-challenge';
import { User } from './user';

/**
 * Type representing the webhook challenge events
 *
 * Further documentation is here:
 * https://dev.codewars.com/?shell#code-challenges
 */
export interface WebhookChallengeEvent {
  /**
   * The action that triggered the webhook
   */
  action: WebhookChallengeActions;
  /**
   * The code challenge that was affected by the action
   */
  code_challenge: {
    /**
     * The id of the code challenge.
     */
    id: CodeChallenge['id'];
    /**
     * The id of the user who performed the action
     */
    created_by_id: User['id'];
  };
}
