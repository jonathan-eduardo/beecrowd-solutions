/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1008
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [number, workedHours, amountPerHour] = input.split('\n').map(Number)
const salary = workedHours * amountPerHour

console.log(`NUMBER = ${number}\nSALARY = U$ ${salary.toFixed(2)}`)
