module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    moduleNameMapper: {
      "@src/(.*)": "<rootDir>/src/$1",
      "@tempo/(.*)": "<rootDir>/src/tempo/$1",
    },
  };
  