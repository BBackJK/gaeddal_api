export default (sequelize, Sequelize) => sequelize.define(
    'follow',
    {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        follow_id : {
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        target_id : {
            type : Sequelize.INTEGER,
            allowNull : false,
        },
        acceptanced : {
            type : Sequelize.BOOLEAN,
            defaultValue : Sequelize.literal(0),
            allowNull : false,
        },
        removed : {
            type : Sequelize.BOOLEAN,
            defaultValue : Sequelize.literal(0),
            allowNull : false,
        },
        followed_at : {
            type : 'TIMESTAMP',
            defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull : false,
        },
        acceptanced_at : { type : Sequelize.DATE },
        removed_at : { type : Sequelize.DATE }
    }, {
        timestamps : false,
        freezeTableName : true,
        tableName : 'follow',
        sequelize
    }
)
