// jest.config.cjs
module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(uuid)/).+\\.js$",
  ],
  testMatch: ["**/tests/**/*.[jt]s?(x)"],
  testEnvironment: "node"
};
