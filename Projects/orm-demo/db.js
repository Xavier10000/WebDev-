const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('orm_demo', 'root', 'akshit@12', {
    host: 'localhost',
    dialect: 'mysql'
});



const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


global.sequelize = sequelize;
module.exports = connectDB;