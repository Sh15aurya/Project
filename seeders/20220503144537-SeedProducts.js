'use strict';
const clothingData = require('../dummydata.json')
const groceryData = require('../groceries_data_dummy.json')
const schoolsupplyData = require('../schoolsupply_dummy.json')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', clothingData.Men)
    await queryInterface.bulkInsert('Products', clothingData.Women)
    await queryInterface.bulkInsert('Products', clothingData.Children)
    await queryInterface.bulkInsert('Products', groceryData.fruits)
    await queryInterface.bulkInsert('Products', groceryData.vegetables)
    await queryInterface.bulkInsert('Products', groceryData.frozen_foods)
    await queryInterface.bulkInsert('Products', schoolsupplyData.items)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
