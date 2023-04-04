/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1066
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const even = input.filter((num) => num && num % 2 === 0).length
const odd = input.filter((num) => num && num % 2 !== 0).length
const positives = input.filter((num) => num && num > 0).length
const negatives = input.filter((num) => num && num < 0).length

console.log(`${even} valor(es) par(es)`)
console.log(`${odd} valor(es) impar(es)`)
console.log(`${positives} valor(es) positivo(s)`)
console.log(`${negatives} valor(es) negativo(s)`)
