/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1060
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8').split('\n')
const startDay = input[0].replace(/\D/g, '')
const endDay = input[2].replace(/\D/g, '')
const [startHour, startMinute, startSecond] = input[1].split(':').map(Number)
const [endHour, endMinute, endSecond] = input[3].split(':').map(Number)

let days = endDay - startDay
let hours = endHour - startHour
let minutes = endMinute - startMinute
let seconds = endSecond - startSecond

if (seconds < 0) {
  seconds = seconds + 60
  minutes = minutes - 1
}

if (minutes < 0) {
  minutes = minutes + 60
  hours = hours - 1
}

if (hours < 0) {
  hours = hours + 24
  days = days - 1
}

console.log(`${days} dia(s)`)
console.log(`${hours} hora(s)`)
console.log(`${minutes} minuto(s)`)
console.log(`${seconds} segundo(s)`)
