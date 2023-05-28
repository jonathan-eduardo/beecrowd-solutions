/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1132
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const [X, Y] = input
  .filter((val) => val)
  .map(Number)
  .sort((a, b) => a - b)
let sum = 0

for (let i = X; i <= Y; i++) {
  if (i % 13 != 0) {
    sum += i
  }
}

console.log(sum)
