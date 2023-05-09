/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1113
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
input.forEach((pair) => {
  const [x, y] = pair
    .split(' ')
    .filter((val) => val)
    .map(Number)
  if (x != y) {
    console.log(x > y ? 'Decrescente' : 'Crescente')
  }
})
