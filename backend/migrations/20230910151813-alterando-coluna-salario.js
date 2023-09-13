'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Jobs', 'sallary', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('sua_tabela', 'sallary', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
