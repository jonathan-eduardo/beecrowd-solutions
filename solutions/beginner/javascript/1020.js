/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1020
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = +require('fs').readFileSync('./input.txt', 'utf8')
const days = (input % 365) % 30
const months = Math.floor((input % 365) / 30)
const years = Math.floor(input / 365)
console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`)
