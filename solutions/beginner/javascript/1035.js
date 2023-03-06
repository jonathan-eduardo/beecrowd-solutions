/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1035
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [A, B, C, D] = input.split(' ').map(Number)
const condition =
  B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 == 0
console.log(condition ? 'Valores aceitos' : 'Valores nao aceitos')
