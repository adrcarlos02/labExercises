// migrations/20241112053345-add-borrowerId-to-items.js

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Items', 'borrowerId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Items', 'borrowerId');
  },
};