/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1044
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const [A, B] = input
  .split(' ')
  .map(Math.abs)
  .sort((a, b) => a - b)
console.log(B % A === 0 ? 'Sao Multiplos' : 'Nao sao Multiplos')
