const User = require('./User');
const Baked = require('./Baked');

User.hasMany(Baked, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Baked.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Baked };