/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1175
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')

for (let i = 19; i > -1; i--) {
  console.log(`N[${input.length - 1 - i}] = ${input[i]}`)
}
