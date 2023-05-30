/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1134
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const fuels = input.filter((val) => val).map(Number)
const codes = fuels
  .slice(0, fuels.indexOf(4))
  .filter((val) => val > 0 && val < 4)

const result = codes.reduce(
  (fuels, code) => {
    if (code === 1) fuels.Alcool++
    if (code === 2) fuels.Gasolina++
    if (code === 3) fuels.Diesel++
    return fuels
  },
  { Alcool: 0, Gasolina: 0, Diesel: 0 }
)
console.log('MUITO OBRIGADO')
Object.entries(result).forEach(([name, value]) => {
  console.log(`${name}: ${value}`)
})
