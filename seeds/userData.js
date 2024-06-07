const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: bcrypt.hashSync('password123', 10),
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: bcrypt.hashSync('password123', 10),
  },
  {
    username: 'user3',
    email: 'user3@example.com',
    password: bcrypt.hashSync('password123', 10),
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
