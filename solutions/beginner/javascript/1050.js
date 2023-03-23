/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1050
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')

const cities = {
  11: 'Sao Paulo',
  19: 'Campinas',
  21: 'Rio de Janeiro',
  27: 'Vitoria',
  31: 'Belo Horizonte',
  32: 'Juiz de Fora',
  61: 'Brasilia',
  71: 'Salvador',
}

console.log(cities[input] ? cities[input] : 'DDD nao cadastrado')
