/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1052
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const values = input.split('\n').map(Number)
const positives = values.filter((value) => value > 0).length
console.log(`${positives} valores positivos`)
