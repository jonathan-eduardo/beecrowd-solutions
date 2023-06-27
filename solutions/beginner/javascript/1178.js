/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1178
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * let input = +require('fs').readFileSync('/dev/stdin', 'utf8') * 2;
 */

let input = +require('fs').readFileSync('./input.txt', 'utf8') * 2

for (let i = 0; i < 100; i++) {
  console.log(
    `N[${i}] = ${(input /= 2).toLocaleString('en-US', {
      minimumFractionDigits: 4,
      useGrouping: false,
    })}`
  )
}
