const root = process.cwd();
const src = `${root}/app`;
// const html = `${root}/public`;
const dist = `${root}/dist`;
const host = 'localhost';

module.exports = {
  lint: {
    fix: process.env.AUTOFIX === 'true'
  },
  webpack: {
    isWatching: process.env.IS_WATCHING === 'true',
    shouldMinify: process.env.NODE_ENV !== 'development',
    root,
    src,
    // html,
    dist,
    host,
    port: 3030,
    fileName: '/main.js'
  },
  vendor: {
    src: src + '/vendors/**/*',
    dest: dist + '/vendors'
  }
};
