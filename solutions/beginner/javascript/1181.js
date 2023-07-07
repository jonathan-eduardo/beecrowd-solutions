/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1181
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const [line, operation] = [input[0], input[1]]
const lineLength = 12

function calculate() {
  const result = input
    .slice(2)
    .slice(line * lineLength, line * lineLength + lineLength)
    .reduce((acc, curr) => Number(acc) + Number(curr))

  return operation === 'S' ? result : result / lineLength
}

console.log(calculate().toFixed(1))
