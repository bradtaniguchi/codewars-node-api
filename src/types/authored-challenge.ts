/**
 *List challenges authored by the user.
 */
export interface AuthoredChallenge {
  /**
   * ID of the kata.
   */
  id: string;
  /**
   * Name of the kata.
   */
  name: string;
  /**
   * Description of the kata in Markdown.
   */
  description: string;

  /**
   * Rank of the kata if approved.
   */
  rank?: number;
  /**
   * Rank name of the kata if approved.
   */
  rankName?: string;
  /**
   * Array of tags associated with the kata.
   */
  tags: string[];
  /**
   * Array of language names the kata is available in.
   */
  languages: string[];
}
