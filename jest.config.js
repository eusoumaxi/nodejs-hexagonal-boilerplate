const { compilerOptions } = require('./tsconfig.json')
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>//reports//coverage',
  coverageReporters: [
    'text',
    'lcov',
    'html'
  ],
  coverageProvider: 'v8',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>'
  }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/*.spec.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
}
