import { CompletedChallenge } from './completed-challenge';

/**
 * Response object returned by the getCompletedChallenge
 */
export interface CompletedChallengeResponse {
  /**
   * Total number of pages.
   */
  totalPages: number;
  /**
   * Total number of items.
   */
  totalItems: number;
  /**
   * The list of completed challenges the user has completed.
   */
  data: CompletedChallenge[];
}
