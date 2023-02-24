/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1020
 * 
 * OBS: an account is needed to view the problem
 * 
 * beecrowd input should be: 
 * const [notes, cents] = require('fs').readFileSync('/dev/stdin', 'utf8').split('.').map(Number);
 */
const [notes, cents] = require('fs').readFileSync('./input.txt', 'utf8').split('.').map(Number);
const calculateBankNotes = (amount, type) => {
  const count = {
    nota: { 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0 },
    moeda: { 100: 0, 50: 0, 25: 0, 10: 0, 5: 0, 1: 0 }
  };
  console.log(`${type.toUpperCase()}S:`);
  Object.keys(count[type])
    .reverse()
    .forEach((value) => {
      console.log(
        `${Math.floor(amount / value)} ${type}(s) de R$ ${
          type === 'moeda' ? (value / 100 + 0.001).toFixed(2) : value + '.00'
        }`
      );
      amount %= value;
    })
  return amount * 100 || 0;
}
const moneyRemaining = calculateBankNotes(notes, 'nota');
calculateBankNotes(cents + moneyRemaining, 'moeda');