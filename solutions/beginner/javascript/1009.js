/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1009
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [salesmanName, baseSalary, totalSales] = input.split('\n')
const comission = 15 / 100
const total = Number(baseSalary) + Number(totalSales) * comission

console.log(`TOTAL = R$ ${total.toFixed(2)}`)
