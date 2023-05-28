/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1131
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const scores = input.filter((val) => val)
const results = { Inter: 0, Gremio: 0, Empates: 0 }

for (let i = 0; i < scores.length; i++) {
  const [first, second] = scores[i].split(' ').map(Number)
  if (first && second) {
    console.log('Novo grenal (1-sim 2-nao)')

    if (first > second) {
      winner = 'Inter'
    } else if (first < second) {
      winner = 'Gremio'
    } else {
      winner = 'Empates'
    }
    results[winner]++
  } else {
    if (first == 1) {
      continue
    } else {
      const matches = Object.values(results).reduce((acc, curr) => acc + curr)
      console.log(`${matches} grenais`)

      Object.entries(results).forEach(([team, result]) => {
        console.log(`${team}:${result}`)
      })
      if (results.Inter > results.Gremio) {
        console.log('Inter venceu mais')
      } else if (results.Inter < results.Gremio) {
        console.log('Gremio venceu mais')
      } else {
        console.log('Nao houve vencedor')
      }
      break
    }
  }
}
