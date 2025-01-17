module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable("Configs", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    config: {
      type: Sequelize.ARRAY(Sequelize.JSONB),
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable("Configs"),
};
