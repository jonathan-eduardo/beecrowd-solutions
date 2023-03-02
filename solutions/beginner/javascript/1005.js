/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1005
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const [A, B] = input.split('\n').map(Number);
const pesoA = 3.5;
const pesoB = 7.5;
const somaPesos = pesoA + pesoB;

const media = (A * pesoA + B * pesoB) / somaPesos;
console.log(`MEDIA = ${media.toFixed(5)}`);
