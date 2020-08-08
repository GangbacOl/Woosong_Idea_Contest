const { sequelize } = require(".");

// user 데이터베이스

module.exports = (sequelize,DataTypes) => {
    return sequelize.define('user',{
        idx:{ // 고유번호
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true
        },
        account : { // 계정
            type: DataTypes.STRING(20),
            primaryKey : true,
        },
        passwd : { // 비밀번호
            type :DataTypes.STRING(88),
            allowNull : false
        },
        salt : {
            type : DataTypes.STRING(88),
            allowNull : false
        },
        iterator:{
            type : DataTypes.INTEGER,
            allowNull : false
        },
        profile_image : { // 프로필사진이 저장된 경로
            type : DataTypes.STRING(48),
            unique : true
        },
        email : { // 이메일 
            type : DataTypes.STRING(50),
            unique : true
        },name : { // 실제 이름
            type : DataTypes.STRING(30),
            allowNull : false
        },
        nickname : { // 닉네임
            type : DataTypes.STRING(20),
            unique : true
        },
        description : { // 간단한 자기소개
            type : DataTypes.STRING(300) 
        }
    })
}