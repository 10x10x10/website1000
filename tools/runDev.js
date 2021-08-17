const open = require('open');
const npm = require('npm');

open('http://localhost:3000/');

npm.load(() => npm.commands['run-script']("dev"));
 