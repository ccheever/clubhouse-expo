let fs = require('fs');
let readline = require('readline');

let cgbiToPng = require('cgbi-to-png');

async function convert(inputFilepath, outputFilepath) {
  let cgbiBuffer = await fs.promises.readFile(inputFilepath);
  let pngBuffer = cgbiToPng.revert(cgbiBuffer);
  await fs.promises.writeFile(outputFilepath, pngBuffer);
}

if (require.main === module) {
  (async () => {
    let [inputFilepath, outputFilepath] = process.argv.slice(2);
    if (inputFilepath && outputFilepath) {
      await convert(inputFilepath, outputFilepath);
    } else {
      let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
      });

      rl.on('line', (line) => {
        let filepath = line.trim();
        convert(filepath, filepath);
        console.log(`Converted ${filepath}`);
      });
    }
  })();
}

module.exports = {
  convert,
};
