var game;
var points=0;
var timer;


document.getElementById('start').addEventListener('click', function(){
    $('#description').css('display', 'none');
    $('#start').css('display', 'none');
    $('#score').css('display', 'block');
    $('#game-view').css('display', 'block');
    $('#clock-box').css('display', 'block');
    timer = setInterval(checkTimer, 1000);
    game = new MemriseGame();
    newChallenge();
  });


 function animateCoin() {
    var btc = document.getElementById('btc-reward');
    btc.style.display = "block";
    btc.style.right = '1px';
    btc.style.top = '1px';
    document.getElementById('sound').play();
    setTimeout(function(){
      btc.style.display = "none";
    }, 1000);
  }

function checkTimer(){
  game.secondsLeft--
    if (game.secondsLeft >= 0){
      document.getElementById('clock').innerHTML = game.secondsLeft;
    } else {
      clearInterval(timer);
      gameOver();
    }
  }


var randomTitle;

var newChallenge = function() {
 $('html').css('background-image', "url('./images/spring-fi.jpg')");
 var titlesValue = game.pickTitle(game.words)
 randomTitle = titlesValue.translation;
 var word1 =  game.pickCard(game.words)
 var word2 =  game.pickCard(game.words)
 var word3 =  game.pickCard(game.words)
while (word1 === word2 || word1 === word3 || word2 === word3 || titlesValue.translation === word1 || titlesValue.translation === word2 || titlesValue.translation === word3) {
 var word1 =  game.pickCard(game.words)
 var word2 =  game.pickCard(game.words)
 var word3 =  game.pickCard(game.words)
}

var arrayOfWords = [
  randomTitle,
  word1,
  word2,
  word3,
]
var a1 = arrayOfWords.splice(Math.floor(Math.random() * arrayOfWords.length),1)
var a2 = arrayOfWords.splice(Math.floor(Math.random() * arrayOfWords.length),1)
var a3 = arrayOfWords.splice(Math.floor(Math.random() * arrayOfWords.length),1)
var a4 = arrayOfWords[0]


$('.title').html(titlesValue.name);
$('#word1-card').html(a1);
$('#word2-card').html(a2);
$('#word3-card').html(a3);
$('#word4-card').html(a4);

}

$("#word1, #word2, #word3, #word4").click(function(){
 var guess = $(this).text().replace(/\s+/g, '');
 var answer = randomTitle.replace(/\s+/g, '')

if (guess == answer) {
  $('#number-of-points').html( parseInt($('#number-of-points').text()) + 25 );
   //game.secondsLeft += 10;
   animateCoin();
   newChallenge()
}

else { $('#number-of-points').html( parseInt($('#number-of-points').text()) - 25 );
    newChallenge();

}

})

function gameOver(){
    $('html').css('background-image', "url('./images/hockey.jpg')");
    $('#btc-reward').css('display', "none");
    $('#clock-box').css('display', "none");
    $('#game-view').css('display', "none");
    $('#score').css('display', "block");
    $('#score').css('position', "relative");
    $('#score').css('margin', "0 auto");
    $('#score').css('fontSize', "2rem");
    $('#game-over-img').css('display', "block");
    $('#score').css('background', '(255,255,255, .9');
    var div = document.getElementById('score');
    div.innerHTML = "Your final score is " + div.innerHTML;
    if (parseInt($('#number-of-points').text()) >= 225) {
    div.innerHTML = div.innerHTML + "<br>You rock!";}
    if (parseInt($('#number-of-points').text()) < 225) {
    div.innerHTML = div.innerHTML + "<br>Keep on keepin' on!";}
  }
