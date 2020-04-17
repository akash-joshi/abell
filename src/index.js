#!/usr/bin/env node

const action = require('./action');
const program = require('commander');

program.version(require('../package.json').version);

program
  .command('build')
  .action(action.build);

program
  .command('serve')
  .option('--port [port]', 'Serve on different port')
  .action((command) => {
    action.serve(command.port);
  })

program.parse(process.argv);

module.exports = action;