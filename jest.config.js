/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)',
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
};