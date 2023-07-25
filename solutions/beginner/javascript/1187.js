/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1187
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const operation = input[0]
const numbers = input.slice(1)
let sum = 0

for (let i = 0; i < 5; i++) {
  const step = i + 1
  const row = numbers.slice(i * 12 + step, i * 12 + 12 - step)
  for (let j = 0; j < row.length; j++) {
    sum += Number(row[j])
  }
}

const result = operation === 'S' ? sum : sum / 30
console.log(result.toFixed(1))
