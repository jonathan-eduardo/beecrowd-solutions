/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1115
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(Number)
  if (x && y) {
    if (x > 0 && y > 0) console.log('primeiro')
    if (x < 0 && y > 0) console.log('segundo')
    if (x < 0 && y < 0) console.log('terceiro')
    if (x > 0 && y < 0) console.log('quarto')
  } else {
    break
  }
}
