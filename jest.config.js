process.env.TZ = 'Europe/Paris';

module.exports = {
  preset: 'jest-preset-angular',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/index.ts',
    '!src/**/*.module.ts',
    '!src/environments/*.ts',
    '!src/main.ts'
  ],
  moduleNameMapper: {
    '@core(.*)': '<rootDir>/src/app/core/$1',
    '@features(.*)': '<rootDire/src/app/features/$1',
    '@shared(.*)': '<rootDir>/src/app/shared/$1'
  },
  roots: ['<rootDir>', '<rootDir>/jest'],
};
