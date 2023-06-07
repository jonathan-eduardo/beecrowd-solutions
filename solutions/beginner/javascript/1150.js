/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1150
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const values = input.filter((val) => val).map(Number)
let X = values[0]
let Y = values.slice(1).find((val) => val > X)
let count = 1

for (let i = X; i <= Y; i += X) {
  X++
  count++
}
console.log(count)
