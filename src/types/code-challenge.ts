export interface CodeChallenge {
  id: string;
  name: string;
  slug: string;
  url: string;
  category: string;
  description: string;
  tags: string[];
  languages: string[];
  rank?: {
    // TODO: create nested interface-type
    id: number;
    name: string;
    color: string;
  };
  createdBy: {
    // TODO: create nested interface type
    username: string;
    url: string;
  };
  approvedBy: {
    username: string;
    url: string;
  };
  totalAttempts: number;
  totalCompleted: number;
  totalStars: number;
  voteScore: number;
  publishedAt: string;
  approvedAt: string;
}
