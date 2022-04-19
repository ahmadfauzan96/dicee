// Generate a random number between 1 to 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// Change the left dice picture based on randomNumber1
document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
// Change the right dice picture based on randomNumber2
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');
// Change the alt texts.
document.querySelectorAll('img')[0].setAttribute('alt', 'Player 1 got score ' + randomNumber1 + '.');
document.querySelectorAll('img')[1].setAttribute('alt', 'Player 2 got score ' + randomNumber2 + '.');
// Result
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
} else if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerHTML = 'Draw!';
}
