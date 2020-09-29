module.exports = {
  // Allow us to import stuff from these folders using absolute paths
  // https://jestjs.io/docs/en/configuration#moduledirectories-array-string
  moduleDirectories: ['node_modules', 'src'],
  // Create mock responses for static assets imports
  // https://jestjs.io/docs/en/webpack#handling-static-assets
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/mocks/fileMock.js',
    '\\.css$': '<rootDir>/test/mocks/styleMock.js'
  },
  // Import additional scripts and modules
  // https://testing-library.com/docs/react-testing-library/setup#cleanup
  setupFilesAfterEnv: [require.resolve('./test/jest.setup.js')],
  // This option sets the URL for the jsdom environment. It is reflected in properties such as `location.href`.
  // https://jestjs.io/docs/en/configuration.html#testurl-string
  testURL: 'http://localhost:8080/'
};
