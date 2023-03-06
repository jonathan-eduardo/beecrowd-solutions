/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1040
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8')
const [g1, g2, g3, g4, examGrade] = input.split(/\s|\n/).map(Number)
const [w1, w2, w3, w4] = [2, 3, 4, 1]
const average = (g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / 10

console.log(`Media: ${average.toFixed(1)}`)
if (average < 5) {
  console.log(`Aluno reprovado.`)
} else if (average >= 5 && average < 7) {
  const finalGrade = (average + examGrade) / 2
  console.log(`Aluno em exame.\nNota do exame: ${examGrade.toFixed(1)}`)
  console.log(finalGrade >= 5 ? 'Aluno aprovado.' : 'Aluno reprovado.')
  console.log(`Media final: ${finalGrade.toFixed(1)}`)
} else {
  console.log(`Aluno aprovado.`)
}
