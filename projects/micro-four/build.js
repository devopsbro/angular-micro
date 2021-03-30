const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/micro-four/runtime.js',
    './dist/micro-four/polyfills.js',
    // './dist/micro-one/scripts.js',
    './dist/micro-four/main.js'
  ];

  await fs.ensureDir('src/elements');
  await concat(files, 'src/elements/micro-four.js');
//   await fs.copyFile(
//     './dist/micro-onestyles.css',
//     'elements/styles.css'
//   );

  // https://github.com/angular/angular/issues/23732
  fs.readFile('src/elements/micro-four.js', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/webpackJsonp/g, 'webpackJsonpM4');
    fs.writeFile('src/elements/micro-four.js', result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });

})();