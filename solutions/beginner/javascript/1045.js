/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1045
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const [A, B, C] = [...input.split(' ').sort((a, b) => b - a)].map(Number)

function checkTriangleType() {
  let types = []
  const atLeastTwo = A == B || A == C || B == C
  const allSides = A == B && B == C

  if (A >= B + C) return ['NAO FORMA TRIANGULO']
  if (A * A == B * B + C * C) types.push('TRIANGULO RETANGULO')
  if (A * A > B * B + C * C) types.push('TRIANGULO OBTUSANGULO')
  if (A * A < B * B + C * C) types.push('TRIANGULO ACUTANGULO')
  if (atLeastTwo) {
    types.push(allSides ? 'TRIANGULO EQUILATERO' : 'TRIANGULO ISOSCELES')
  }
  return types
}

checkTriangleType().map((type) => console.log(type))
