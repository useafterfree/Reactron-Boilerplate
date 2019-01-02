const { presets, plugins } = require('./babel.preset.builder');

module.exports = (api) => {
  api.cache(true);
  return {
    presets,
    plugins
  };
};
