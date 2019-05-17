export default (sequelize, Sequelize) => sequelize.define(
  'alarmLists',
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
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    removed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    created_at: { type: Sequelize.DATE },
    updated_at: { type: Sequelize.DATE },
    removed_at: { type: Sequelize.DATE },
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'alarmList',
    sequelize,
  },
);
