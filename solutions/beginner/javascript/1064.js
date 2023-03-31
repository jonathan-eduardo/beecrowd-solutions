/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1064
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * let input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

let input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
let positives = input.map(Number).filter((num) => num > 0)
let average = positives.reduce((acc, curr) => acc + curr, 0) / positives.length
console.log(`${positives.length} valores positivos`)
console.log(average.toFixed(1))
