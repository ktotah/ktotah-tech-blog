const { Post } = require('../models');

const postData = (users) => [
  {
    title: 'Why Learning Potions is Important',
    content: 'Potions allow wizards and witches to maintain a true mastery of magical substances...',
    user_id: users.find(user => user.username === 'HPotter').id,
  },
  {
    title: 'Differences Between Hexes and Curses',
    content: 'There is a difference between hexes and curses. Hexes are minor dark charms...',
    user_id: users.find(user => user.username === 'HGranger').id,
  },
  {
    title: 'Apparition Tips and Tricks',
    content: 'I have really loved learning about apparition. It has really simplified travel...',
    user_id: users.find(user => user.username === 'RWeasley').id,
  },
  {
    title: 'Levitation Charm',
    content: `It's LeviOsa, not LeviosA!`,
    user_id: users.find(user => user.username === 'HGranger').id,
  }
];

const seedPosts = async (users) => {
  await Post.bulkCreate(postData(users));
};

module.exports = seedPosts;
