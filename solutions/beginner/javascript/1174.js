/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1174
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')

for (let i = 0; i < 100; i++) {
  if (+input[i] <= 10) console.log(`A[${i}] = ${Number(input[i]).toFixed(1)}`)
}
