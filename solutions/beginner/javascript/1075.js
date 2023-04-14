/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1075
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')

for (let i = 2; i < 10001; i += input) {
  console.log(i)
}
