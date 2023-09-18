const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_content: {
      type: Datatypes.SRING,
    },
    date_created: {
      type: Datatypes.DATE,
      allowNull: false,
      defaultValue: Datatypes.NOW,
    },
    blogpost_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'blogpost',
        key: 'id',
      },
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments'
  }
);

module.exports = Comments;