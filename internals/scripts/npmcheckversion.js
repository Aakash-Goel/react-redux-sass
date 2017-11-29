const { exec } = require('child_process');

exec('npm -v', (err, stdout, stderr) => {
  if (err) throw err;
  if (parseFloat(stdout) < 3) {
    throw new Error('[ERROR:] You need npm version @>=3 \n');
    process.exit(1);
  }

  process.stdout.write(`[SUCCESS:] Your npm version is ${parseFloat(stdout)}. Good To Go. \n`);
});
