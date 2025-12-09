// Learn more https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add resolver to handle ESM modules (.mjs files)
config.resolver = {
  ...config.resolver,
  sourceExts: [...(config.resolver?.sourceExts || []), 'mjs'],
  // Use 'browser' condition for web builds to get browser-compatible modules
  unstable_conditionNames: ['browser', 'require', 'react-native'],
};

// Configure transformer to ensure import.meta gets transformed by Babel
config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

// For web builds, ensure packages using import.meta are transformed
// Metro will use Babel transformer which includes our import.meta plugin
config.serializer = {
  ...config.serializer,
};

module.exports = config;

