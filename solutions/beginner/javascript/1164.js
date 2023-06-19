/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1164
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const numbers = input.map(Number).slice(1, +input[0] + 1)

for (let i = 0; i < numbers.length; i++) {
  let sum = 0

  for (let j = 1; j <= numbers[i] / 2; j++) {
    if (numbers[i] % j === 0) sum += j
  }
  console.log(
    numbers[i] == sum
      ? `${numbers[i]} eh perfeito`
      : `${numbers[i]} nao eh perfeito`
  )
}
