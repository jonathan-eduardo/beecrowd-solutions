/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1074
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')

input
  .slice(1)
  .filter((val) => val)
  .map(Number)
  .forEach((num) => {
    if (num === 0) {
      console.log('NULL')
    } else {
      const evenOrOdd = num % 2 === 0 ? 'EVEN' : 'ODD'
      const positiveOrNegative = num > 0 ? 'POSITIVE' : 'NEGATIVE'
      console.log(`${evenOrOdd} ${positiveOrNegative}`)
    }
  })
