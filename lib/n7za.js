/**
 * n7za:
 *
 * @see https://github.com/zhsoft88/n7za
 *
 * @author zhsoft88 <zhsoft88@icloud.com> (https://github.com/zhsoft88)
 * @copyright © 2020 zhuatang.com
 * @license MIT
 */

const PATH = require('path')

function get_7za_path() {
  const dir = PATH.join(__dirname, '..', 'platform')
  const platform = process.platform
  if (platform == 'darwin')
    return PATH.join(dir, 'mac', '7za')
  if (platform == 'win32')
    return PATH.join(dir, 'win', '7za.exe')
  // linux
  return PATH.join(dir, 'linux', '7za')
}

module.exports = function (args, callback) {
  const { spawn } = require('child_process')
  const az7 = spawn(get_7za_path(), args)
  az7.stdout.on('data', (data) => {
    if (callback && callback.on_stdio) {
      callback.on_stdio(data)
      return
    }
    console.log(`${data}`)
  })
  az7.stderr.on('data', (data) => {
    if (callback && callback.on_stderr) {
      callback.on_stderr(data)
      return
    }
    console.error(`${data}`)
  })
  az7.on('close', (code) => {
    if (callback && callback.on_close) {
      callback.on_close(code)
    }
  })
}
