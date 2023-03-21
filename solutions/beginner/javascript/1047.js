/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1047
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const [startH, startM, endH, endM] = input.split(' ').map(Number)

let minutes = endM - startM
let hours = endH - startH

if (minutes < 0) {
  minutes = minutes + 60
  hours = hours - 1
}

if (hours < 0) {
  hours = hours + 24
}

if (startH === endH && startM === endM) {
  hours = 24
  minutes = 0
}

console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`)
