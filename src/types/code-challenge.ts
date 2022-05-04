import { Author } from './author';
import { CodeChallangeRank } from './code-challenge-rank';

/**
 * A code challenge information
 */
export interface CodeChallenge {
  /**
   * ID of the kata.
   */
  id: string;
  /**
   * Name of the kata.
   */
  name: string;
  /**
   * Slug of the kata.
   */
  slug: string;
  /**
   * URL of the kata.
   */
  url: string;
  /**
   * Category of the kata.
   */
  category: string;
  /**
   * Description of the kata in Markdown.
   */
  description: string;
  /**
   * Array of tags associated with the kata.
   */
  tags: string[];
  /**
   * Array of language names the kata is available in.
   */
  languages: string[];
  /**
   * Object describing the rank of the kata, if approved.
   */
  rank?: CodeChallangeRank;
  /**
   * Object describing who created this code challenge.
   */
  createdBy: Author;
  /**
   * Object describing who approved this code challenge.
   */
  approvedBy: Author;
  /**
   * Total number of completions.
   */
  totalAttempts: number;
  /**
   * Total number of attempts.
   */
  totalCompleted: number;
  /**
   * Total number of bookmarks.
   */
  totalStars: number;
  /**
   * The sum of votes casted.
   */
  voteScore: number;
  /**
   * Whether to allow contributions.
   *
   * **Note** This will become an optional param in a future version.
   */
  contributorsWanted: boolean;
  /**
   * Date and time when published, in ISO_8601 format.
   */
  publishedAt: string;
  /**
   * Date and time when approved, in ISO_8601 format.
   */
  approvedAt: string;
}
