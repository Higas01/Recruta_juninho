module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Jobs', 'description');
  },

  async down(queryInterface, Sequelize) {
    // Se você quiser reverter essa migração, pode adicionar a coluna novamente aqui.
    await queryInterface.addColumn('Jobs', 'description', {
      type: Sequelize.STRING,
    });
  },
};
