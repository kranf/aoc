module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    moduleNameMapper: {
      "@src/(.*)": "<rootDir>/src/$1",
      "@2022/(.*)": "<rootDir>/src/2022/$1",
      "@2023/(.*)": "<rootDir>/src/2023/$1",
    },
  };
  