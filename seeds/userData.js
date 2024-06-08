const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'HPotter',
    email: 'harryp@hogwarts.edu',
    password: bcrypt.hashSync('password123', 10), // Password is hashed before being stored
  },
  {
    username: 'HGranger',
    email: 'hermioneg@hogwarts.edu',
    password: bcrypt.hashSync('password123', 10), // Password is hashed before being stored
  },
  {
    username: 'RWeasley',
    email: 'ronw@hogwarts.edu',
    password: bcrypt.hashSync('password123', 10), // Password is hashed before being stored
  },
];

// Bulk create users and apply hooks for password hashing
const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;
