# n7za
Simple Node.js wrapper for 7-zip command line (7za) with native binaries embeded(win, mac, linux), no other install needed

## Installation

```sh
$ [sudo] npm install -g n7za
```

## Usage

```
n7za [ARGS]...

ARGS: the normal 7za command line arguments.
```

### <abbr title="As Nodejs Module Interface">As Nodejs Module</abbr>

```js
const n7za = require('n7za')
n7za(['a', '-r', 'output.7z', 'a.txt', 'dir_to_my_data'], {
// process stdio data.
//  on_stdio: (data) => {
//    ......
//  },
// process stderr data.
//  on_stderr: (data) => {
//    ......
//  },
// on_close call when n7za running finished.
  on_close: (code) => {
    process.exit(code)
  }
})
```

