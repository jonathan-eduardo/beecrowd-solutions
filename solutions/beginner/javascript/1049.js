/**
 * beecrowd problem link:
 * https://www.beecrowd.com.br/judge/pt/problems/view/1049
 *
 * OBS: an account is needed to view the problem
 *
 * beecrowd input should be:
 * const input = require('fs').readFileSync('/dev/stdin', 'utf8');
 */

const input = require('fs').readFileSync('./input.txt', 'utf8')
const [subFilo, classeAnimal, familia] = input.split('\n')

const especies = {
  vertebrado: {
    ave: { carnivoro: 'aguia', onivoro: 'pomba' },
    mamifero: { onivoro: 'homem', herbivoro: 'vaca' },
  },
  invertebrado: {
    inseto: { hematofago: 'pulga', herbivoro: 'lagarta' },
    anelideo: { hematofago: 'sanguessuga', onivoro: 'minhoca' },
  },
}

console.log(especies[subFilo][classeAnimal][familia])
