const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/micro-three/runtime.js',
    './dist/micro-three/polyfills.js',
    // './dist/micro-one/scripts.js',
    './dist/micro-three/main.js'
  ];

  await fs.ensureDir('src/elements');
  await concat(files, 'src/elements/micro-three.js');
//   await fs.copyFile(
//     './dist/micro-onestyles.css',
//     'elements/styles.css'
//   );

  // https://github.com/angular/angular/issues/23732
  fs.readFile('src/elements/micro-three.js', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/webpackJsonp/g, 'webpackJsonpM3');
    fs.writeFile('src/elements/micro-three.js', result, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });

})();