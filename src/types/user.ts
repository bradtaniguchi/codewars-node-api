/**
 * User information
 */

import { UserCodeChallenges } from './user-code-challenges';
import { UserRanks } from './user-ranks';

export interface User {
  /**
   * Username of the user.
   */
  username: string;
  /**
   * Name of the user.
   */
  name: string;
  /**
   * Total honor points eared by the user.
   */
  honor: number;
  /**
   * The name of the clan.
   */
  clan: string;
  /**
   * The user's position on the overall leaderboard.
   */
  leaderboardPosition: number;
  /**
   * Array of skills entered by the user.
   */
  skills: string[];
  /**
   * Describes the user's rank overall, and per language basis.
   */
  ranks: UserRanks;
  /**
   * Object with fields relating to authoring, and completing katas.
   */
  codeChallenges: UserCodeChallenges;
}
