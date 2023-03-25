/**
 * beecrowd problem link:
 * https:www.beecrowd.com.br/judge/pt/problems/view/1052
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')

// For some reason this doesn't pass the tests, but it should ¯\_(ツ)_/¯

/* function getMonth(num) {
  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  }
  return months[num]
} */

function getMonth(num) {
  if (num == 1) return 'January'
  if (num == 2) return 'February'
  if (num == 3) return 'March'
  if (num == 4) return 'April'
  if (num == 5) return 'May'
  if (num == 6) return 'June'
  if (num == 7) return 'July'
  if (num == 8) return 'August'
  if (num == 9) return 'September'
  if (num == 10) return 'October'
  if (num == 11) return 'November'
  if (num == 12) return 'December'
}

console.log(getMonth(input))
