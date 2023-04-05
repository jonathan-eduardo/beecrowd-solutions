/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1067
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')

for (let odd = 1; odd <= input; odd += 2) {
  console.log(odd)
}
