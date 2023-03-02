/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1036
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = require('fs').readFileSync('./input.txt', 'utf8');
const [A, B, C] = input.split(' ').map(Number);
const delta = Math.pow(B, 2) - 4 * A * C;

if (delta > 0 && A > 0) {
  console.log(`R1 = ${((-B + Math.sqrt(delta)) / (2 * A)).toFixed(5)}`);
  console.log(`R2 = ${((-B - Math.sqrt(delta)) / (2 * A)).toFixed(5)}`);
} else {
  console.log(`Impossivel calcular`);
}
