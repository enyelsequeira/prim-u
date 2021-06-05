module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: ["!<rootDir>/node_modules/**"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testMatch: ["**/*.(test|spec).(js|jsx|ts|tsx)"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  coverageReporters: ["html", "text"],
  clearMocks: true,
};
