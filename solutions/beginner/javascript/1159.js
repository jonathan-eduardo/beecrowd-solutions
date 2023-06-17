/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1159
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n').map(Number);
 */

const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .split('\n')
  .map(Number)
const values = input.slice(0, input.indexOf(0))

values.forEach((value) => {
  let sum = 0
  value = value % 2 === 0 ? value : value + 1

  for (let i = 1; i <= 5; i++) {
    sum += value
    value += 2
  }
  console.log(sum)
})
