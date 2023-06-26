/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1176
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const values = input.slice(1, +input[0] + 1)

for (let i = 0; i < values.length; i++) {
  console.log(`Fib(${values[i]}) = ${fib(values[i])}`)
}

function fib(value) {
  if (+value === 0) return 0
  let [num, prev] = [1, 1]

  for (let i = 1; i < value - 1; i++) {
    let aux = num
    num += prev
    prev = aux
  }
  return num
}
