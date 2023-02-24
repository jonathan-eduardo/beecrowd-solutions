/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1011
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const radius = Number(input);
const volume = (4 / 3) * 3.14159 * Math.pow(radius, 3);
console.log(`VOLUME = ${volume.toFixed(3)}`);
