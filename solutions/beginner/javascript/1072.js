/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1072
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')

const results = input
  .slice(1)
  .filter((val) => val)
  .map(Number)
  .reduce(
    (acc, curr) => {
      type = curr >= 10 && curr <= 20 ? 'in' : 'out'
      return { ...acc, [type]: acc[type] + 1 }
    },
    { in: 0, out: 0 }
  )

console.log(`${results.in} in`)
console.log(`${results.out} out`)
