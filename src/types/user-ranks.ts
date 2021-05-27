import { UserRank } from './user-rank';

/**
 * Describes the user's rank overall, and per language basis.
 */
export interface UserRanks {
  /**
   * Overall rank
   */
  overall: UserRank;
  /**
   * Ranks for each language trained, where the key
   * is the language name, and the value is the user-rank
   */
  languages: Record<string, UserRank>;
}
