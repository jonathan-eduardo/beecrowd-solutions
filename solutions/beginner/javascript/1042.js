/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1042
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split(' ').map(Number);
 */
const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .split(' ')
  .map(Number)
const ordered = [...input].sort((a, b) => a - b)
ordered.forEach((elem) => console.log(elem))
console.log()
input.forEach((elem) => console.log(elem))
