module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  setupFilesAfterEnv: [
    "<rootDir>/tests/unit/setup-tests.ts"
  ],
}
