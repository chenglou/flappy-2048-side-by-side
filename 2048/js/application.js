// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var gameManager =
    new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  window.addRandomTile = function() {
    gameManager.move(Math.floor(Math.random() * 4));
  };
});
