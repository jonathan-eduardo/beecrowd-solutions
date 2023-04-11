/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1071
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const [first, last] = input
  .map(Number)
  .filter((val) => val)
  .sort((a, b) => a - b)

let result = 0
for (let i = first + 1; i < last; i++) {
  if (i % 2 !== 0) {
    result += i
  }
}

console.log(first, last)
console.log(result)
