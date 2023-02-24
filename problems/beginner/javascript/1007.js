/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1007
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const [A, B, C, D] = input.split('\n').map(Number);

const difference = A * B - C * D;
console.log(`DIFERENCA = ${difference}`);
