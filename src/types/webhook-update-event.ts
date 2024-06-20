/**
 * Type representing the event returned when a webhook is
 * created.
 *
 * This is sent once a webhook is setup.
 *
 * Headers:
 * ```
 * User-Agent: Codewars Hookbot
 * Content-Type: application/json
 * X-Webhook-Event: webhook
 * X-Webhook-Secret: <secret>
 * ```
 */
export interface WebhookUpdateEvent {
  /**
   * Once
   */
  action: 'updated';
  /**
   * Information on the webhook created
   */
  webhook: {
    /**
     * The id of the webhook, will be returned in other
     * events.
     */
    id: string;
  };
}
