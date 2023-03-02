/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1002
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const radius = Number(input);
const PI = 3.14159;
const area = (PI * radius * radius).toFixed(4);
console.log(`A=${area}`);
