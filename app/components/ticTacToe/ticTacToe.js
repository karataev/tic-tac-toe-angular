app
  .component('ticTacToe', {
    controller: ['Game', '$scope', function(Game, $scope) {
      var vm = this;

      vm.startGame = function() {
        Game.startGame();
      };

      vm.endGame = function() {
        Game.setState(Game.STATE_INTRO);
      };

      vm.restartGame = function() {
        Game.startGame();
      };

      $scope.$watch(function() {
        return Game.getState();
      }, function(newVal) {
        vm.state = newVal;
      });

      $scope.$watch(function() {
        return Game.getGrid();
      }, function(newVal) {
        vm.grid = newVal;
      });

      vm.isIntro = function() {
        return vm.state === Game.STATE_INTRO;
      };

      vm.isPlay = function() {
        return vm.state === Game.STATE_PLAY;
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