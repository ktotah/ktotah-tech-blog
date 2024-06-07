const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns...',
    user_id: 1,
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'There is a difference between authentication and authorization...',
    user_id: 2,
  },
  {
    title: 'Object-Relational Mapping',
    content: 'I have really loved learning about ORMs. It has really simplified...',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
