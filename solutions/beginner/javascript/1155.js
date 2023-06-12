/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1155
 *
 * OBS: an account is needed to view the problem
 *
 * This problem has no input.
 */

let s = 1

for (let i = 2; i <= 100; i++) {
  s += 1 / i
}

console.log(s.toFixed(2))
