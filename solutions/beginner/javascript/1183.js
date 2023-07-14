/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1183
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const sumValues = (arr) => arr.reduce((acc, curr) => +acc + +curr, 0)
const operation = input[0]
let sum = 0

for (let i = 0; i < 11; i++) {
  const row = input.slice(1).slice(i * 12 + i + 1, i * 12 + 12)
  sum += sumValues(row)
}

const result = operation === 'S' ? sum : sum / 66
console.log(result.toFixed(1))
