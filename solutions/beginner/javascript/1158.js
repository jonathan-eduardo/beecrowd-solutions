/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1158
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const values = input.slice(1, Number(input[0]) + 1).filter((val) => val)

values.forEach((pair) => {
  let nums = pair.split(' ').filter((val) => val)
  let [X, Y] = nums.map(Number)
  let total = 0

  X += X % 2 === 0 ? 1 : 0

  for (let i = 0; i < Y; i++) {
    total += X
    X += 2
  }
  console.log(total)
})
