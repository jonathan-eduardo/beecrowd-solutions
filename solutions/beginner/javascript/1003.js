/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1003
 *
 * OBS: an account is needed to view the problem
 * beecrowd input should be:
 *
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [A, B] = input.split('\n').map(Number)
console.log(`SOMA = ${A + B}`)
