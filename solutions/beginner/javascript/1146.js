/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1146
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const filtered = input.filter((val) => val).map(Number)
const values = filtered.slice(0, input.indexOf(0))

for (let i = 0; i < values.length; i++) {
  const sequence = []
  for (let j = 1; j <= values[i]; j++) {
    sequence.push(j)
  }
  console.log(sequence.join(' '))
}
