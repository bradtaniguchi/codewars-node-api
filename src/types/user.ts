/*
username	string	Username of the user.
name	string	Name of the user.
honor	number	Total honor points earned by the user.
clan	string	Name of the clan.
leaderboardPosition	number	The user's position on the overall leaderboard.
skills	string[]	Array of skills entered by the user.
ranks	object	Ranks object with overall and language ranks.
codeChallenges	object	Object with fields totalAuthored and totalCompleted for the number of authored and completed kata respectively.
*/

export interface User {
  username: string;
  name: string;
  honor: number;
  clan: string;
  leaderboardPosition: number;
  skills: string[];
  // TODO: define sub-type
  ranks: any;
  // TODO: define sub-type
  codeChallenges: {
    totalAuthored: number;
    totalCompleted: number;
  };
}
