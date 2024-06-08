const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Spot on!',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Wicked.',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'Great post!',
    user_id: 1,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
