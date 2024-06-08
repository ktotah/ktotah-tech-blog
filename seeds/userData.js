const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
  {
    username: 'HPotter',
    email: 'harryp@hogwarts.edu',
    password: bcrypt.hashSync('password123', 10),
  },
  {
    username: 'HGranger',
    email: 'hermioneg@hogwarts.edu',
    password: bcrypt.hashSync('password123', 10),
  },
  {
    username: 'RWeasley',
    email: 'ronw@hogwarts.edu',
    password: bcrypt.hashSync('password123', 10),
  },
];

const seedUsers = async () => {
  return await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
