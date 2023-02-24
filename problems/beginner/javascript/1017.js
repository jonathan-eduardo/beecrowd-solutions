/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1017
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const [timeSpent, averageSpeed] = input.split('\n');
const baseFuelExpense = 12;
const quantityNeeded = (averageSpeed * timeSpent) / baseFuelExpense;

console.log(`${quantityNeeded.toFixed(3)}`);
