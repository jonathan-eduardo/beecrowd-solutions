/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1188
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const [column, operation] = [input[0], input[1]]
const values = input.slice(2)
let sum = 0

for (let i = 0; i < 12; i++) {
  sum += +values.slice(i * 12, i * 12 + 12)[column]
}

const result = operation === 'S' ? sum : sum / 12
console.log(result.toFixed(1))
