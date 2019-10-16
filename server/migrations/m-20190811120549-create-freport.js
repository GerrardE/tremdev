module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Freports', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    userId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },

    fellowshipId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Fellowships',
        key: 'id'
      }
    },

    newcells: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    totalcells: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    attendance: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    notes: {
      type: Sequelize.STRING,
      allowNull: false
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  down: queryInterface => queryInterface.dropTable('Freports')
};