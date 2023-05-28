/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1132
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const [X, Y] = input
  .filter((val) => val)
  .map(Number)
  .sort((a, b) => a - b)

for (let i = X + 1; i < Y; i++) {
  if (i % 5 == 2 || i % 5 == 3) {
    console.log(i)
  }
}
