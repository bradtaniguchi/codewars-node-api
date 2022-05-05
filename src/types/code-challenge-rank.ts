/**
 * Object that describes the code challenge rank
 *
 */
export interface CodeChallengeRank {
  /**
   * The id of the challenge-rank
   */
  id: number;
  /**
   * The name of the rank, what is shown in badges
   */
  name: string;
  /**
   * The color
   */
  color: string;
}

/**
 * Alias of `CodeChallengeRank`
 * @see CodeChallengeRank
 * @deprecated use CodeChallengeRank, will be removed in v2
 */
export type CodeChallangeRank = CodeChallengeRank;
