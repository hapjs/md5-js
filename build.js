var fs = require('fs');
var rollup = require('rollup');
var uglify = require('uglify-js');
var version = process.env.VERSION || require('./package.json').version;
var banner =
  '/*!\n' +
  ' * md5-js v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' hapjs\n' +
  ' * Released under the MIT License.\n' +
  ' */'

rollup.rollup({
  entry: './src/md5.js'
})
.then(function (bundle) {
    var code = bundle.generate({
        format: 'umd',
        banner: banner,
        moduleName: 'md5'
    }).code;

    var res = uglify.minify(code, {
      fromString: true,
      output: {
        preamble: banner,
        ascii_only: true
      }
    });

    return [
        write('md5.js', code),
        write('md5.min.js', res.code)
    ];
})
.catch(console.log);

function write (dest, code) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(dest, code, function (err) {
      if (err) return reject(err)
      console.log(blue(dest) + ' ' + getSize(code))
      resolve()
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}