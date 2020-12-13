import bcrypt from 'bcryptjs';

const users = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@fruitables.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jDoe@fruitables.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johnD@fruitables.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstName: 'Vegan',
    lastName: 'Fruitarian',
    email: 'veganF@fruitables.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstName: 'Vegan',
    lastName: 'Life',
    email: 'vLife@fruitables.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
