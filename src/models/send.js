export default (sequelize, Sequelize) => sequelize.define(
  'send',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    send_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    recieve_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    contents: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    lat: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    lng: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    removed: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: false,
    },
    sended_at: { type: Sequelize.DATE },
    removed_at: { type: Sequelize.DATE },
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'send',
    sequelize,
  },
);
