module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'city', {
      type: Sequelize.STRING,
      allowNull: true, // Você pode alterar isso para false se a cidade for obrigatória
    });

    await queryInterface.addColumn('Users', 'state', {
      type: Sequelize.STRING,
      allowNull: true, // Você pode alterar isso para false se o estado for obrigatório
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'city');
    await queryInterface.removeColumn('Users', 'state');
  },
};
