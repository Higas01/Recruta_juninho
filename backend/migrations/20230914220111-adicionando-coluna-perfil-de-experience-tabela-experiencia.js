module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Experiences', 'experience_profile', {
      type: Sequelize.STRING,
      allowNull: true, // Você pode alterar isso para false se a cidade for obrigatória
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Experiences', 'experience_profile');
  },
};
