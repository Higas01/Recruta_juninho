'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Alterar o tipo da coluna 'description' para TEXT
    await queryInterface.changeColumn('Companies', 'description', {
      type: Sequelize.TEXT,
      allowNull: true, // Defina como true ou false, dependendo dos seus requisitos
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Reverter a alteração, se necessário
    await queryInterface.changeColumn('Companies', 'description', {
      type: Sequelize.STRING, // Defina o tipo de volta para VARCHAR
      allowNull: true, // Defina como true ou false, dependendo dos seus requisitos
    });
  },
};
