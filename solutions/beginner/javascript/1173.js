/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1173
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * let input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

let input = +require('fs').readFileSync('./input.txt', 'utf8')

for (let i = 0; i < 10; i++) {
  console.log(`N[${i}] = ${input}`)
  input *= 2
}



