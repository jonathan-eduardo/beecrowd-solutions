/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1037
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');

if (input >= 0 && input <= 25) {
  console.log(`Intervalo [0,25]`);
} else if (input > 25 && input <= 50) {
  console.log(`Intervalo (25,50]`);
} else if (input > 50 && input <= 75) {
  console.log(`Intervalo (50,75]`);
} else if (input > 75 && input <= 100) {
  console.log(`Intervalo (75,100]`);
} else {
  console.log(`Fora de intervalo`);
}
