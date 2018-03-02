module.exports = function (sequelize, DataTypes) {
  var Projects = sequelize.define("projects", {
    author: DataTypes.STRING,
    task: DataTypes.STRING,
    dueDate: DataTypes.DATE
  });
  return Projects;
};
