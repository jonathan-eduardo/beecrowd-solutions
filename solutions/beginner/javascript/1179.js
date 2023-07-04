/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1179
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const values = input.includes('') ? input.slice(0, input.indexOf('')) : input
const info = { par: [], impar: [] }

function logNumbersAndReset(type) {
  for (let i = 0; i < info[type].length; i++) {
    console.log(`${type}[${i}] = ${+info[type][i]}`)
  }
  info[type] = []
}

for (let i = 0; i < values.length; i++) {
  let { par, impar } = info

  if (par.length === 5 || impar.length === 5) {
    const type = par.length === 5 ? 'par' : 'impar'
    logNumbersAndReset(type)
  }

  if (+input[i] % 2 === 0) {
    info.par.push(input[i])
  } else {
    info.impar.push(input[i])
  }
}

logNumbersAndReset('impar')
logNumbersAndReset('par')
