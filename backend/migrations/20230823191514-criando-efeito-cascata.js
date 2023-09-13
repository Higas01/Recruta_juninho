'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Applications', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Applications', 'jobId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Jobs',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Experiences', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Você pode reverter as alterações aqui, se necessário
    await queryInterface.changeColumn('Applications', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    });

    await queryInterface.changeColumn('Applications', 'jobId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Jobs',
        key: 'id',
      },
    });
  },
};
