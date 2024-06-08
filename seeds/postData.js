const { Post } = require('../models');

const postData = (users) => [
  {
    title: 'Why Learning Potions is Important',
    content: 'Potions allow wizards and witches to maintain a true mastery of magical substances, enabling them to create powerful elixirs and brews that can heal, enhance abilities, or even cause harm.',
    user_id: users.find(user => user.username === 'HPotter').id,
  },
  {
    title: 'Differences Between Hexes and Curses',
    content: 'There is a difference between hexes and curses. Hexes are minor dark charms intended to inconvenience the target, while curses are more powerful and intended to cause significant harm or lasting damage.',
    user_id: users.find(user => user.username === 'HGranger').id,
  },
  {
    title: 'Apparition Tips and Tricks',
    content: 'I have really loved learning about apparition. It has really simplified travel, making it possible to instantly move from one location to another with ease, though it requires concentration and practice to master.',
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
