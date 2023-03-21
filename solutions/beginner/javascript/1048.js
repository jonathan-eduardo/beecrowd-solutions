/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1048
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const salary = Number(input)

let logNewSalaryInfo = (value, percentage) => {
  const reajustment = value * (percentage / 100)
  console.log(`Novo salario: ${(value + reajustment).toFixed(2)}`)
  console.log(`Reajuste ganho: ${reajustment.toFixed(2)}`)
  console.log(`Em percentual: ${percentage} %`)
}

if (salary <= 400) {
  logNewSalaryInfo(salary, 15)
} else if (salary <= 800) {
  logNewSalaryInfo(salary, 12)
} else if (salary <= 1200) {
  logNewSalaryInfo(salary, 10)
} else if (salary <= 2000) {
  logNewSalaryInfo(salary, 7)
} else {
  logNewSalaryInfo(salary, 4)
}
