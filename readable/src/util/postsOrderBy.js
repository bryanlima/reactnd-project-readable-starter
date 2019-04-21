export function orderBy(posts, by) {

  const postsKeys = Object.keys(posts);

  switch (by) {
    case 'DateAsc':
      {
        const p = postsKeys.sort((a, b) => new Date(posts[a].timestamp) - new Date(posts[b].timestamp));
        return p;
      }
    case 'DateDesc':
      {
        const p = postsKeys.sort((a, b) => new Date(posts[b].timestamp) - new Date(posts[a].timestamp));
        return p;
      }
    case 'VoteScoreAsc':
      {
        const p = postsKeys.sort((a, b) => posts[a].voteScore - posts[b].voteScore);
        return p;
      }

    case 'VoteScoreDesc':
      const p = postsKeys.sort((a, b) => posts[b].voteScore - posts[a].voteScore);
      return p;
    default:
      return posts;
  }
}