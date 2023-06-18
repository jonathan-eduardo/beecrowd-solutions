/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1160
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')

input
  .slice(1, +input[0] + 1)
  .filter((val) => val)
  .forEach((entry) => {
    let [A, B, G1, G2] = entry.split(' ').map(Number)

    let years = 0

    for (let i = 0; i <= 101; i++) {
      if (A > B) break

      A += Math.floor(A * (G1 / 100))
      B += Math.floor(B * (G2 / 100))
      years++
    }

    console.log(years > 100 ? `Mais de 1 seculo.` : `${years} anos.`)
  })
