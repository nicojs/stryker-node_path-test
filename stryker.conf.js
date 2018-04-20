module.exports = function(config) {
    config.set({
      mutate: [
        'shared/shared.js'
      ],
      testFramework: "mocha",
      testRunner: "mocha",
      mutator: "javascript",
      reporter: ["clear-text", "progress"],
      coverageAnalysis: "off",
      logLevel: "info"
    });
  };