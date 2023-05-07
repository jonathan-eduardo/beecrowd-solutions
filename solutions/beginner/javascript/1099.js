/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1099
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const testCases = input.filter((val) => val).slice(1)

testCases.forEach((item) => {
  const [start, end] = item
    .split(' ')
    .map(Number)
    .filter((val) => val)
    .sort((a, b) => a - b)

  let result = 0
  for (let i = start + 1; i < end; i++) {
    if (i % 2 !== 0) {
      result += i
    }
  }
  console.log(result)
})
