// For a detailed explanation regarding each configuration property, visit:
module.exports = {  
    clearMocks: false,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    testEnvironment: "node",
    testMatch: [
      ['./tests/unit.test.ts']
    ],
  };