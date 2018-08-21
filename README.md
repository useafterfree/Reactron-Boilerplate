To remove all jobs (old captures), run `redis-cli flushall`

## LipReader
LipReader application built using electron
### Prerequisites
- [node](https://nodejs.org) >= 6.10 (check if installed and version `node -v`)
- [gulp](https://www.npmjs.com/package/gulp) >= 3.9 (check if installed and version `gulp -v`)
- [yarn](https://yarnpkg.com/en/docs/install) >= 1.3.2

### Installation
1. Clone the repository

2. Change to this reponsitory's directory
	
3. Install npm dependencies

	`$ yarn install`

### Environment variables
export NODE_ENV=development

### Build Tasks
- `$ gulp browserify` - transpiles and concats all JavaScript files, then moves it to `dist` folder
- `$ gulp html` - copies the html files to `dist` folder
- `$ gulp stylus` - compiles the stylus files to css, then moves it to `dist` folder
- `$ gulp images` - copies images to `dist` folder
- `$ gulp build` - runs `browserify`, `html`, `stylus`, and `images` tasks, then uglifies the JavaScript file.

### Running the Application
- `$ npm start` - in most cases, this is what you only need. This command builds and runs the electron app.# Reactron-Boilerplate
