module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        }
    });
  
    return User;
};