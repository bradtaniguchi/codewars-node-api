/**
 * Describes the user's rank overall, and per language basis.
 */
export interface UserRank {
  /**
   * Rank in integer. [-8, -1] maps to kyu, [1, 8] maps to dan.
   */
  rank: number;
  /**
   * Either {-rank} kyu or {rank} dan.
   */
  name: string;
  /**
   * The color of the rank. Possible colors are white (7-8 kyu),
   * yellow (5-6 kyu), blue (3-4 kyu), purple (1-2 kyu), black (1-4 dan), and red (5-8 dan).
   */
  color: string;
  /**
   * The total score earned. This is the number that determines the rank.
   */
  score: number;
}
