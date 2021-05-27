import { AuthoredChallenge } from './authored-challenge';

export interface AuthoredChallengeResponse {
  /**
   * The list of challenges authored by the user
   */
  data: AuthoredChallenge[];
}
