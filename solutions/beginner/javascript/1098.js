/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1098
 *
 * OBS: an account is needed to view the problem
 *
 * This problem has no input.
 */

for (let i = 0; i <= 20; i += 2) {
  for (let j = 1; j <= 3; j++) {
    console.log(`I=${i / 10} J=${j + i / 10}`)
  }
}
