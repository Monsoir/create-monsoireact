#!/usr/local/bin/node

// import  * as program from "commander";
const program = require('commander');

program
  .version(require('../package').version, '-v, --version')

program
  .command('init')
  .description('init a project')
  .option('-t, --type [type]', 'JavaScript type: js or ts', 'js')
  .action(({ type }) => {
    require('../command/init')(type);
  })

program.parse(process.argv)