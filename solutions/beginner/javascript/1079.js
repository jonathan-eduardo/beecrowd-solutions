/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1079
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const lines = input
  .split('\n')
  .filter((val) => val)
  .slice(1)

lines.forEach((line) => {
  const weights = [2, 3, 5]
  const average =
    line
      .split(' ')
      .reduce((acc, curr, index) => (acc += curr * weights[index]), 0) / 10

  console.log(average.toFixed(1))
})
