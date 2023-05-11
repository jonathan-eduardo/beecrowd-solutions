/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1114
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const dates = input.filter((val) => val).map(Number)

dates.slice(0, dates.indexOf(2002) + 1).forEach((date) => {
  console.log(date === 2002 ? 'Acesso Permitido' : 'Senha Invalida')
})
