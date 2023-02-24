/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1018
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const input = +require('fs').readFileSync('/dev/stdin', 'utf8');
 */
const input = +require('fs').readFileSync('./input.txt', 'utf8');

function calculatePossibleNotes(amount) {
  const notesCount = { 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0, 1: 0 };
  console.log(amount);
  Object.keys(notesCount)
    .reverse()
    .map(Number)
    .forEach((note) => {
      console.log(`${Math.floor(amount / note)} nota(s) de R$ ${note},00`);
      amount %= note;
    });
}

calculatePossibleNotes(input);
