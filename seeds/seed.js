const sequelize = require('../config/connection');
const { User } = require('../models');

const user = require('./userData.json');
const description = require('./descriptionData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const userData = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  }); 

  const descriptionData = await User.bulkCreate(descriptionData, {
    individualHooks: true,
    returning: true,
  }); 

  // const user

  process.exit(0);
};

seedDatabase();
