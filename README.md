# md5-js

md5 library and cli tools for javascript

## CLI Installation

```
npm i -g md5-js
```

## CLI Usage

```
md5 example.txt
```

```js
md5 "hello world"
```

## Script Usage

```html
<script src="md5-min.js"></script>
<script>
    var hash = md5('hellow world');
    alert(hash);
</script>
```

## Node.js Usage

```js
var fs = require('fs');
var md5 = require('md5-js');

console.log(md5('hellow world'));

fs.readFile('example.txt', function(err, buf) {
  console.log(md5(buf));
});
```
