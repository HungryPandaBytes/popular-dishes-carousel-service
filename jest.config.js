// SET UP FILE ================================================

module.exports = {
  rootDir: ".",
  displayName: { name: "enzyme-setup", color: "blue" },
  runner: "jest-runner",
  verbose: true,
  errorOnDeprecated: true,
  //   roots: ["./Tests"],
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>setupTest.js"]
};
