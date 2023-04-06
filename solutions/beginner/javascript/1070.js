/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1070
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * let input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */

let input = +require('fs').readFileSync('./input.txt', 'utf8')

input = input % 2 === 0 ? input + 1 : input

for (let i = 0; i < 6; i++) {
  console.log(input)
  input += 2
}
