/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1116
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const values = input.filter((val) => val).slice(1)

values.forEach((pair) => {
  const [x, y] = pair.split(' ').map(Number)
  console.log(y === 0 ? 'divisao impossivel' : (x / y).toFixed(1))
})
