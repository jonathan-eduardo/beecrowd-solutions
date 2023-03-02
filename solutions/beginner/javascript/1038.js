/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1038
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const prices = [4, 4.5, 5, 2, 1.5]
const [code, quantity] = input.split(' ')
const total = prices[code - 1] * quantity
console.log(`Total: R$ ${total.toFixed(2)}`)
