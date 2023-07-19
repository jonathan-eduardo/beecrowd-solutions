/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1185
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const operation = input[0]
let sum = 0

for (let i = 0; i < 11; i++) {
  const row = input.slice(1).slice(i * 12, i * 12 + 11 - i)

  for (let j = 0; j < row.length; j++) {
    sum += Number(row[j])
  }
}

const result = operation === 'S' ? sum : sum / 66
console.log(result.toFixed(1))
