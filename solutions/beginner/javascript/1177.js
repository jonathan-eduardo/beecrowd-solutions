/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1177
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')
let j = 0

for (let i = 0; i < 1000; i++) {
  if (j === input) j = 0
  console.log(`N[${i}] = ${j++}`)
}
