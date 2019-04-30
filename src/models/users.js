export default (sequelize, Sequelize) => sequelize.define(
    'users',
    {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        sns_email : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        nickname : {
            type : Sequelize.STRING,
            allowNull : false,
        },
        auth_email : {
            type : Sequelize.BOOLEAN,
            defaultValue : Sequelize.literal(0),
            allowNull : false,
        },
        removed : {
            type : Sequelize.BOOLEAN,
            defaultValue : Sequelize.literal(0),
            allowNull : false,
        },
        created_at : {
            type : 'TIMESTAMP',
            defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull : false,
        },
        auth_at : { type : Sequelize.DATE },
        updated_at : { type : Sequelize.DATE },
        removed_at : { type : Sequelize.DATE }
    }, {
        timestamps : false,
        freezeTableName : true,
        tableName : 'users',
        sequelize
    }
)
