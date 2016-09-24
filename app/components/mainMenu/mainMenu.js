app
  .component('mainMenu', {
    controller: ['Game', 'Players', function(Game, Players) {
      var vm = this;

      vm.player1 = Players.getPlayer1();
      vm.player2 = Players.getPlayer2();

      vm.startGame = function() {
        Game.startGame();
      };

    }],
    templateUrl: 'components/mainMenu/mainMenu.html'
  })