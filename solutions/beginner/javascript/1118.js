/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1118
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const grades = input.filter((val) => val).map(Number)
let validGrades = []
let showMenu = false

for (let i = 0; i < grades.length; i++) {
  if (showMenu) {
    const menuOption = grades[i]
    if (menuOption == 1) {
      showMenu = false
    } else if (menuOption == 2) {
      break
    } else {
      console.log('novo calculo (1-sim 2-nao)')
    }
    continue
  }

  if (grades[i] >= 0 && grades[i] <= 10) {
    validGrades.push(grades[i])
  } else {
    console.log('nota invalida')
  }

  if (validGrades.length == 2) {
    const average = (validGrades[0] + validGrades[1]) / 2
    console.log(`media = ${average.toFixed(2)}`)
    validGrades = []
    showMenu = true
    console.log('novo calculo (1-sim 2-nao)')
  }
}
