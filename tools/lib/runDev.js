const open = require('open');
const npm = require('npm');

const port = 3000;
open(`http://localhost:${port}/`);

npm.load(() => npm.commands['run-script'](["dev"]));
 