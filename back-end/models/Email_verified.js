const { sequelize } = require(".");

// email_verified 데이터베이스

module.exports = (sequelize,DataTypes) => {
    return sequelize.define('email_verified',{
        idx:{ // 고유번호
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true
        },
        email : {
            type : DataTypes.STRING(50),
            primaryKey : true
        },
        verified : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue: false
        },
        verify_code : {
            type: DataTypes.STRING(50),
            allowNull : false
        }
    })
}