/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1154
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
let ages = []

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    ages.push(+input[i])
  } else {
    console.log((ages.reduce((a, b) => a + b) / ages.length).toFixed(2))
    break
  }
}
