import bcrypt from 'bcryptjs';
import faker from 'faker';
import { config } from 'dotenv';

config();

const salt = process.env.SALT || 10;
const SALT_ROUNDS = +salt;

const password = bcrypt.hashSync(process.env.SUPER_ADMIN_PASSWORD, SALT_ROUNDS);

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    id: faker.random.uuid(),
    firstName: 'Gerrard',
    lastName: 'Ezeugwa',
    phone: '08137519688',
    email: 'ezeugwagerrard@gmail.com',
    branchId: '1',
    country: 'Nigeria',
    password,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};