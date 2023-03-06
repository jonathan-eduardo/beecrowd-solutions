/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1010
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const productsPrice = input.split('\n').map((product) => {
  const [code, quantity, price] = product.split(' ')
  return Number(quantity) * Number(price)
})
const total = productsPrice[0] + productsPrice[1]
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
