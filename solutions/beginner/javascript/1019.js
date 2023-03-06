/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1019
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = +require('fs').readFileSync('./input.txt', 'utf8')
const oneHourInSeconds = 3600
const hours = Math.floor(input / oneHourInSeconds)
const minutes = Math.floor((input % oneHourInSeconds) / 60)
const seconds = input % 60

console.log(`${hours}:${minutes}:${seconds}`)
