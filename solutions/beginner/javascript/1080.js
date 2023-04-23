/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1080
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const values = input.split('\n').filter((val) => val)

const biggest = [...values].sort((a, b) => b - a)[0]
const index = values.indexOf(biggest)

console.log(`${biggest}`)
console.log(`${index + 1}`)
