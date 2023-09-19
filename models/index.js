const User = require('./User');
const Blogpost = require('./Blogpost');
const Comments = require('./Comments');


User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id',
});

Blogpost.hasMany(Comments, {
  foreignKey: 'blog_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogpost, Comments };