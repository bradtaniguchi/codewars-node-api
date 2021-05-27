/**
 * Object that represents a user on codewars, that has created
 * the related content on the platform.
 */
export interface Author {
  /**
   * The username of the author
   */
  username: string;
  /**
   * The URL to the author's codewars profile
   */
  url: string;
}
