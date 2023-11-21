import { WebhookChallengeActions } from '../constants';
import { CodeChallenge } from './code-challenge';
import { User } from './user';

/**
 * Type representing the webhook challenge events
 *
 * Further documentation is here:
 * https://dev.codewars.com/?shell#code-challenges
 *
 * Headers:
 * ```
 * User-Agent: Codewars Hookbot
 * Content-Type: application/json
 * X-Webhook-Event: code_challenge
 * X-Webhook-Secret: <secret>
 * ```
 *
 * TODO: add solution_finalized version
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
     * Id of the webhook that created and sent this event.
     */
    created_by_id: string;
  };
  solution_finalized?: {
    /**
     * The id of the code challenge where the solution is finalized.
     */
    id: CodeChallenge['id'];

    /**
     * The user's id
     *
     * TODO: not sure where else this is used.
     */
    user_id: string;
  };
}
