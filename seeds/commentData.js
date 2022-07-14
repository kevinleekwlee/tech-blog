const { Comment } = require('../models');

const commentData = [
  {
    "response": "I love MVC!",
    "user_id": "4",
    "post_id": "1",
    "post_date": "2022-07-10",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "5"
  },
  {
    "response": "MVC is challenging at first, but it is definitely worth the time to learn!",
    "user_id": "5",
    "post_id": "1",
    "post_date": "2022-07-11",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "1"
  },
  {
    "response": "This was very informative!",
    "user_id": "6",
    "post_id": "1",
    "post_date": "2022-07-11",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "0"
  },
  {
    "response": "This clarified things for me!",
    "user_id": "4",
    "post_id": "2",
    "post_date": "2022-06-28",
    // need upvote by feature
    // need green_thumb_counter feature
    "green_thumb_counter": "10"
  },
  {
    "response": "I always wanted to understand the difference and now I do!",
    "user_id": "5",
    "post_id": "2",
    "post_date": "2022-06-29",
    // need green_thumb_counter feature
    "green_thumb_counter": "2"
  },
  {
    "response": "Thank you for the post!",
    "user_id": "6",
    "post_id": "2",
    "post_date": "2022-06-29",
    // need green_thumb_counter feature
    "green_thumb_counter": "0"
  },
  {
    "response": "Keep up the great work!",
    "user_id": "4",
    "post_id": "3",
    "post_date": "2022-06-28",
    // need green_thumb_counter feature
    "green_thumb_counter": "0"
  },
  {
    "response": "ORM is an interetsing topic.",
    "user_id": "5",
    "post_id": "3",
    "post_date": "2022-06-28",
    // need green_thumb_counter feature
    "green_thumb_counter": "8"
  },
  {
    "response": "I am learning about this right now too.",
    "user_id": "6",
    "post_id": "3",
    "post_date": "2022-06-28",
    // need green_thumb_counter feature
    "green_thumb_counter": "2"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
