module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "moduleFileExtensions": ["tsx", "ts", "js", "jsx", "json", "node"],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};