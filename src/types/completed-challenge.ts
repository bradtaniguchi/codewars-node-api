/**
 * Lists challenges completed by a user.
 */
export interface CompletedChallenge {
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
   * Date and time of completion, in ISO_8601 format.
   */
  completedAt: string;
  /**
   * Array of languages as user completed in.
   */
  completedLanguages: string[];
}
