/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1165
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const values = input.map(Number).slice(1, +input[0] + 1)

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

for (let i = 0; i < values.length; i++) {
  console.log(isPrime(values[i]) ? `${values[i]} eh primo` : `${values[i]} nao eh primo`)
} 
