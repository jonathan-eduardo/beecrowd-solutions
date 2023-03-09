/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1043
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [A, B, C] = input.split(' ').map(Number)
const triangleInequality = A < B + C && B < A + C && C < A + B
const area = ((A + B) * C) / 2
const perimeter = A + B + C

console.log(
  triangleInequality
    ? `Perimetro = ${perimeter.toFixed(1)}`
    : `Area = ${area.toFixed(1)}`
)
