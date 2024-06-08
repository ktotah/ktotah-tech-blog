const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns...',
    user_id: 1, // HPotter's ID
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'There is a difference between authentication and authorization...',
    user_id: 2, // HGranger's ID
  },
  {
    title: 'Object-Relational Mapping',
    content: 'I have really loved learning about ORMs. It has really simplified...',
    user_id: 3, // RWeasley's ID
  },
  {
    title: 'Levitation charm',
    content: `It's LeviOsa, not LeviosA`,
    user_id: 1, // HPotter's ID
  }
];

// Bulk create posts
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
