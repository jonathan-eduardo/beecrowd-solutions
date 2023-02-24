/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1006
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const [A, B, C] = input.split('\n').map(Number);
const pesos = { A: 2, B: 3, C: 5 };
const somaPesos = 10;

const media = (A * pesos['A'] + B * pesos['B'] + C * pesos['C']) / somaPesos;
console.log(`MEDIA = ${media.toFixed(1)}`);
