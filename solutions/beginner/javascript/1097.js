/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1097
 *
 * OBS: an account is needed to view the problem
 *
 * This problem has no input.
 */

for (let i = 1; i <= 9; i += 2) {
  let j = 6 + i
  console.log(`I=${i} J=${j--}`)
  console.log(`I=${i} J=${j--}`)
  console.log(`I=${i} J=${j--}`)
}
