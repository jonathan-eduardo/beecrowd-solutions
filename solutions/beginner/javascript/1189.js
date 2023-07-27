/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1189
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
let sum = 0
const steps = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]

for (let i = 1; i < 11; i++) {
  const start = i * 12
  const row = input.slice(1).slice(start, start + steps[i - 1])
  for (let j = 0; j < row.length; j++) {
    sum += Number(row[j])
  }
}

const result = input[0] === 'S' ? sum : sum / 30
console.log(result.toFixed(1))
