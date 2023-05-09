/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1101
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const pairs = input.filter((val) => val)

pairs.forEach((item) => {
  const [start, end] = item
    .split(' ')
    .map(Number)
    .filter((val) => val && val !== 0)
    .sort((a, b) => a - b)

  if (start && end && start > 0) {
    let sequence = []
    for (let i = start; i <= end; i++) {
      sequence.push(i)
    }
    const sum = sequence.reduce((acc, curr) => acc + curr, 0)
    console.log(`${sequence.join(' ')} Sum=${sum}`)
  }
})
