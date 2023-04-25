/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1094
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const animals = input.filter((val) => val).slice(1)

const totals = animals.reduce(
  (acc, curr) => {
    const [quantity, type] = curr.split(' ')
    return {
      ...acc,
      [type]: acc[type] + Number(quantity),
      TOTAL: acc.TOTAL + Number(quantity),
    }
  },
  { C: 0, R: 0, S: 0, TOTAL: 0 }
)
const getPercentage = (animal) => {
  return ((animal / totals.TOTAL) * 100).toFixed(2)
}

console.log(`Total: ${totals.TOTAL} cobaias`)
console.log(`Total de coelhos: ${totals.C}`)
console.log(`Total de ratos: ${totals.R}`)
console.log(`Total de sapos: ${totals.S}`)

console.log(`Percentual de coelhos: ${getPercentage(totals.C)} %`)
console.log(`Percentual de ratos: ${getPercentage(totals.R)} %`)
console.log(`Percentual de sapos: ${getPercentage(totals.S)} %`)
