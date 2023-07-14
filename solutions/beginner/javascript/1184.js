/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1184
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const operation = input[0]
let sum = 0
let numbers = []

for (let i = 0; i < 12; i++) {
  const row = input.slice(1).slice(i * 12, i * 12 + i)
  numbers.push(...row)
}

for (let i = 0; i < numbers.length; i++) {
  sum += Number(numbers[i])
}

const result = operation === 'S' ? sum : sum / 66
console.log(result.toFixed(1))
