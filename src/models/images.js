export default (sequelize, Sequelize) => sequelize.define(
  'images',
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
    key: {
      type: Sequelize.STRING,
      defaultValue: 'basic',
      allowNull: false,
    },
    removed: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
    removed_at: { type: Sequelize.DATE },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'images',
    sequelize,
  },
);
