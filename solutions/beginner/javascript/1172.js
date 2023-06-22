/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1172
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const values = input.slice(0, 10).map(val => val > 0 ? +val : 1)

for (let i = 0; i < values.length; i++) {
  console.log(`X[${i}] = ${values[i]}`)
}