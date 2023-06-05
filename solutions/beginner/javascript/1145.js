/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1145
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8')
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const [x, y] = input.split(' ').map(Number)

for (let i = 1; i < y + 1; i += x) {
  let sequence = []
  for (j = 0; j < x; j++) {
    sequence.push(j + i)
  }
  console.log(...sequence.filter((val) => val <= y))
}
