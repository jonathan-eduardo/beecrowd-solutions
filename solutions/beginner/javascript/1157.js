/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1157
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = +require('fs').readFileSync('./input.txt', 'utf8')

for (let i = 1; i <= Math.floor(input / 2) + 1; i++) {
  if (input % i === 0) {
    console.log(i)
  }
}
console.log(input)
