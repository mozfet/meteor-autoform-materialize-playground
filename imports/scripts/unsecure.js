var shell = require('shelljs');
var child_process = require('child_process');
var chalk = require('chalk');

shell.config.fatal = true;

// define project name
var project_name = 'meteor-autoform-materialize-playground';

// define project folder
var dir_projects = '~/projects';

// derive directories
var dir_project = dir_projects + '/' + project_name;
console.log(chalk.yellow('dir_project: ' + dir_project));
var dir_secure = 'secure';
console.log(chalk.yellow('dir_secure: ' + dir_secure));

// derive files
var file_compressed_archive = 'secure.tar.gz';
var file_encrypted_archive = 'secure.tar.gz.gpg';

// change to the project directory
shell.cd(dir_project);

// remove old version of security folder if it exists
shell.config.fatal = false;
shell.rm('-rf', dir_secure);
console.log(chalk.yellow('removed old secure folder: ' + dir_secure));
shell.config.fatal = true;

// decrypt the encrypterd security archive
child_process.execFileSync('gpg2', ['--output', file_compressed_archive,
     '--decrypt', file_encrypted_archive], {stdio: 'inherit'});
console.log(chalk.yellow('decrypted security archive: ' +
    file_encrypted_archive));

// inflate the compressed security archive
var compressCmd = 'tar -zxvf '+ file_compressed_archive;
shell.exec(compressCmd);
console.log(chalk.yellow('inflated compressed security archive: ' +
    file_compressed_archive));

// remove the compresssed security archive
shell.rm(file_compressed_archive);
console.log(chalk.yellow('removed compressed security archive: ' +
    file_compressed_archive));

// inform user of success
console.log(chalk.black.bgGreen('completed unsecuring project '+project_name));
