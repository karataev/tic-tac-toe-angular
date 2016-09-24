app
  .component('ticTacToe', {
    controller: ['Game', '$scope', function(Game, $scope) {
      var vm = this;

      vm.grid = Game.getGrid();

      vm.startGame = function() {
        Game.startGame();
      };

      $scope.$watch(function() {
        return Game.getCurrentPlayer();
      }, function(newVal) {
        vm.currentPlayer = newVal;
      });

      vm.cellClicked = function(item) {
        item.title = vm.currentPlayer.value;
        Game.changeTurn();
      };
    }],
    templateUrl: 'components/ticTacToe/ticTacToe.html'
  })