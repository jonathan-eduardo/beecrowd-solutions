/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1151
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')
let sequence = [0, 1]

for (let i = 1; sequence.length < input; i++) {
  sequence.push(sequence[i] + sequence[i - 1])
}

console.log(...sequence.slice(0, input))
