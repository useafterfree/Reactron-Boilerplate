const devPreset = ['@babel/preset-env', {
  targets: {
    electron: '4.0.0'
  }
}];

const presets = [];

if (process.env.IS_WATCHING === 'true') {
  presets.push(devPreset); // We are devving, so Chrome 70
} else {
  presets.push('@babel/preset-env'); // All the way down to ES2015
}

presets.push('@babel/preset-react'); // Always

const plugins = ['transform-object-rest-spread'];

module.exports = { presets, plugins };
