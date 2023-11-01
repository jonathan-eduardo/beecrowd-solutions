/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1190
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
let sum = 0
const splitSizes = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
const numberCount = 30

for (let i = 1; i < 11; i++) {
  const line = i * 12
  const end = line + 12
  const start = end - splitSizes[i - 1]
  const numbers = input.slice(1)
  const row = numbers.slice(start, end)
  for (let j = 0; j < row.length; j++) {
    sum += Number(row[j])
  }
}

const result = input[0] === 'S' ? sum : sum / numberCount
console.log(result.toFixed(1))
