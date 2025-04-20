const { Sequelize } = require('sequelize');

// Conexión con la base de datos
const sequelize = new Sequelize('moodify_db', 'moodify_user', 'SQLSakuya2025', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // desactiva logs SQL (opcional)
});

module.exports = sequelize;

