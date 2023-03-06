/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1016
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const distance = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const distance = require('fs').readFileSync('./input.txt', 'utf8')
const timeToDistance = (Number(distance) * 60) / 30
console.log(`${timeToDistance} minutos`)
