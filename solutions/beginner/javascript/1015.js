/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1015
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [x1, y1, x2, y2] = input.split(/\s/g).map(Number)
const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
console.log(distance.toFixed(4))
