/**
 * n7za:
 *
 * @see https://github.com/zhsoft88/n7za
 *
 * @author zhsoft88 <zhsoft88@icloud.com> (https://github.com/zhsoft88)
 * @copyright © 2020 zhuatang.com
 * @license MIT
 */

const n7za = require('./n7za.js')

function run() {
  const args = process.argv.slice(2)
  n7za(args, {
    on_close: (code) => {
      process.exit(code)
    }
  })
}

module.exports = {run}
