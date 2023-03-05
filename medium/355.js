var Twitter = function () {
  this.tweets = [];
  this.follows = new Set();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.push([userId, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let feed = [];
  for (let i = this.tweets.length - 1; i >= 0 && feed.length < 10; i--) {
    if (
      this.follows.has(userId + "," + this.tweets[i][0]) ||
      userId === this.tweets[i][0]
    )
      feed.push(this.tweets[i][1]);
  }
  return feed;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  this.follows.add(followerId + "," + followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.follows.delete(followerId + "," + followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

let twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
console.log(twitter.getNewsFeed(1)); // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2); // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
console.log(twitter.getNewsFeed(1)); // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2); // User 1 unfollows user 2.
console.log(twitter.getNewsFeed(1)); // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
