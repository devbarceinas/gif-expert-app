const {defaults} = require('jest-config')

const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'css'],
    verbose: true,
  };
};