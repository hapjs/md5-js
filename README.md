# md-five

md5 library and cli tools for javascript

## Installation

```
npm i -g md-file
```

## Usage1

```js
md5 example.txt
```

## Usage2

```js
md5 "hello world"
```

## Usage3

```js
var fs = require('fs');
var md5 = require('md5-js');

fs.readFile('example.txt', function(err, buf) {
  console.log(md5(buf));
});
```
