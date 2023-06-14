/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1156
 *
 * OBS: an account is needed to view the problem
 *
 * This problem has no input.
 */

let [s, total] = [2, 1]

for (let i = 3; i <= 39; i += 2) {
  total += i / s
  s *= 2
}

console.log(total.toFixed(2))
