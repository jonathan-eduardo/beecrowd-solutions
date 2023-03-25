/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1051
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')

function getTax(value) {
  if (value <= 2000) return 'Isento'
  let tax = 0

  if (value > 4500) {
    tax += (value - 4500) * 0.28
    value = 4500
  }
  if (value > 3000) {
    tax += (value - 3000) * 0.18
    value = 3000
  }
  if (value > 2000) {
    tax += (value - 2000) * 0.08
  }
  return `R$ ${tax.toFixed(2)}`
}

console.log(getTax(input))
