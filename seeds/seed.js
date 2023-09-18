const sequelize = require('../config/connection');
const { User, Blogpost, Comments } = require('../models');

const userData = require('./userData.json');
const blogsData = require('./blogData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogs of blogsData) {
    await Blogpost.create({
      ...Blogpost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comments.bulkCreate({
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();