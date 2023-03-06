/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1041
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [x, y] = input.split(' ').map(Number)

if (x === 0 && y === 0) console.log('Origem')
if (x !== 0 && y === 0) console.log('Eixo X')
if (x === 0 && y !== 0) console.log('Eixo Y')
if (x > 0 && y > 0) console.log('Q1')
if (x < 0 && y > 0) console.log('Q2')
if (x < 0 && y < 0) console.log('Q3')
if (x > 0 && y < 0) console.log('Q4')
