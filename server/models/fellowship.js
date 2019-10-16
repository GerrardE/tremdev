module.exports = (sequelize, DataTypes) => {
  const Fellowship = sequelize.define('Fellowship', {
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    branchId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});

  Fellowship.associate = (models) => {
    const { Branch, User } = models;

    Fellowship.belongsTo(Branch, {
      foreignKey: 'id',
      as: 'fellowships'
    });

    Fellowship.belongsTo(User, {
      foreignKey: 'id',
      as: 'user_fellowship'
    });
  };

  return Fellowship;
};