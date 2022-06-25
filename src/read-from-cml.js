process.stdin
  .setEncoding('utf-8')
  .on('data', (line) => {
    console.log(`DATA: ${line}`);
  });

