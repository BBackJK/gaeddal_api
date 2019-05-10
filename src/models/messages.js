export default (sequelize, Sequelize) => sequelize.define(
  'messages',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
    },
    contents: {
      type: Sequelize.TEXT,
    },
    removed: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
    removed_at: { type: Sequelize.DATE },
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'messages',
    sequelize,
  },
);
