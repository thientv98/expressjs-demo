module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    });
  
    return Post;
};