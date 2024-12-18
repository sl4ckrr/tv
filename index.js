// run
  console.log('run');
const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});
// background color changer
function color(z) {
  var a = getComputedStyle(z);
  var b = a.backgroundColor;
  document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}
