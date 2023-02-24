/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1014
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const [kMdistance, totalFuelExpense] = input.split('\n').map(Number);
const consumption = kMdistance / totalFuelExpense;
console.log(`${consumption.toFixed(3)} km/l`);
