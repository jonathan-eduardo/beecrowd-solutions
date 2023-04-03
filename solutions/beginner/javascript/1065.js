/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1065
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const evenNumbers = input.filter((value) => value && value % 2 === 0)
console.log(`${evenNumbers.length} valores pares`)
