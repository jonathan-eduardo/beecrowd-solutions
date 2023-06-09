/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1153
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')
const factorial = (val) => (val === 1 ? val : val * factorial(val - 1))
console.log(factorial(input))
