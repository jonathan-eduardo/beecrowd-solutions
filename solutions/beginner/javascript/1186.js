/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1186
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const operation = input[0]
let sum = 0

for (let i = 1; i < 12; i++) {
  const index = i * 12 + 12
  const row = input.slice(1).slice(index - i, index)

  for (let j = 0; j < row.length; j++) {
    sum += Number(row[j])
  }
}

const result = operation === 'S' ? sum : sum / 66
console.log(result.toFixed(1))
