/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1142
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8')
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')
for (let i = 0; i < input * 4; i++) {
  console.log(`${++i} ${++i} ${++i} PUM`)
}
