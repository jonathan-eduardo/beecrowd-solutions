/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1149
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ').map(Number);
 */

const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .split(' ')
  .map(Number)
const [A, N] = [input[0], input.slice(1).find((val) => val > 0)]

let sum = A
for (let i = N - 1; i > 0; i--) {
  sum += A + i
}
console.log(sum)
