/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1046
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const [start, end] = input.split(' ').map(Number)
const timeSpent = start >= end ? 24 - (start - end) : end - start
console.log(`O JOGO DUROU ${timeSpent} HORA(S)`)
