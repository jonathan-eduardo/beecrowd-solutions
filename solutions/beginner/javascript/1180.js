/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1180
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(/[\n\s]/);
 */

const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .split(/[\n\s]/)

let lower = +input[1]
let pos = 0

for (let i = 1; i < +input[0] + 1; i++) {
  if (+input[i] < lower) {
    lower = input[i]
    pos = i
  }
}

console.log(`Menor valor: ${lower}`)
console.log(`Posicao: ${pos - 1}`)
