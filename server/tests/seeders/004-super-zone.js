module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert("Zones", [{
    name: "Headquarters Zone",
    country: 1,
    notes: "TREM International Headquarters Zone",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete("Zones", null, {})
};
