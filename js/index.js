/* 

1. create words array, with key/value pairs

2. create cards array

3. show word randomly (loop as many times as words array's length)

4. show 4 cards, one containing the value of the word shown (e.g. for sulkapallo badminton).

ONE OF THE 4 CARDS HAS TO CONTAIN THE VALUE OF THE WORD

5. checkAnswer (if clicked word correct, number of points increases 25 per word and next word is shown, if incorrect, number of points decreases and next word is shown)

6. save number of points for next round;

7. go to next round after having clicked a card;

6. set timer for the game

7. add a restart button

*/

var MemriseGame = function() {
  this.secondsLeft = 30;
  this.numberOfPoints = 0;
  this.started = false;
  this.words = [
{name: 'sulkapallo', translation: 'badminton'},
{name: 'keilailu', translation: 'bowling'},
{name: 'jalkapallo', translation: 'football'},
{name: 'hiihto', translation: 'skiing'},
{name: 'luistelu', translation: 'skating'},
{name: 'kelkkailu', translation: 'sledging'},
{name: 'uinti', translation: 'swimming'},
{name: 'aitajuoksu', translation: 'hurdles'},
{name: 'pikajuoksu', translation: 'sprint'},
{name: 'suunnistus', translation: 'orienteering'},
{name: 'lentopallo', translation: 'volleyball'},
{name: 'melonta', translation: 'canoeing'},
{name: 'kössi', translation: 'squash'},
{name: 'salibandy', translation: 'floorball'},
{name: 'vuorikiipeily', translation: 'mountaneering'},
{name: 'koskenlaskua', translation: 'rafting'},
{name: 'vesipallo', translation: 'water polo'},
{name: 'keihäänheitto', translation: 'javeling'},
{name: 'ratsastus', translation: 'riding'},
{name: 'jääkiekko', translation: 'hockey'},
{name: 'kriketti', translation: 'cricket'},
{name: 'sauvakävely', translation: 'nordic walking'},
{name: 'pöytätennis', translation: 'table tennis'},
{name: 'melonta', translation: 'canoeing'},
{name: 'suopotkupallo', translation: 'swamp soccer'},
{name: 'melonta', translation: 'canoeing'},
{name: 'eukonkanto', translation: 'wife-carrying'},
{name: 'laitesukellus', translation: 'scuba diving'},
{name: 'liitely', translation: 'gliding'},
{name: 'varjoliitely', translation: 'paragliding'},
{name: 'jousiammunta', translation: 'archery'},
{name: 'koripallo', translation: 'basketball'},
{name: 'pyöräily', translation: 'cycling'},
{name: 'käsipallo', translation: 'handball'},
{name: 'purjehdus', translation: 'sailing'},
{name: 'soutu', translation: 'rowing'},
{name: 'painonnosto', translation: 'weightlifting'},
{name: 'yleisurheilu', translation: 'athletics'},
{name: 'voimistelu', translation: 'gimnastics'},
{name: 'itsepuolustuslajit', translation: 'martial arts'},
{name: 'paini', translation: 'wrestling'},
{name: 'varjoliitely', translation: 'paragliding'},
{name: 'rullalautailu', translation: 'skateboarding'},
{name: 'lainelautailu', translation: 'surfing'},
{name: 'lumilautailu', translation: 'snowsurfing'},
{name: 'polttopallo', translation: 'dodgeball'},
{name: 'kiipeily', translation: 'climbing'}
];
}


// MemriseGame.prototype._getRandomInt = function(words) {
//   return Math.floor(Math.random() * words.length)
// }

MemriseGame.prototype.pickTitle = function(words) {
 // var a = MemriseGame.prototype._getRandomInt(words);

 words.sort(function(){return Math.round(Math.random());});
 return words.pop();


//this.words.splice(a, 1)
}


MemriseGame.prototype.pickCard = function(words) {
  var newSession = _.shuffle(words)
  var newSession2 = newSession[0]

  return newSession2.translation
}
