'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Jobs', 'requirements', {
      type: Sequelize.TEXT,
      allowNull: false,
    });

    await queryInterface.addColumn('Jobs', 'responsibilities', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Jobs', 'requirements');
    await queryInterface.removeColumn('Jobs', 'responsibilities');
  },
};
