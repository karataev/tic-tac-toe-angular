app
  .component('mainMenu', {
    controller: function(Game, Players) {
      var vm = this;

      vm.player1 = Players.getPlayer1();
      vm.player2 = Players.getPlayer2();

      vm.startGame = function() {
        Game.startGame();
      };
    },
    templateUrl: 'pages/mainMenu/mainMenu.html'
  })