app
  .component('ticTacToe', {
    controller: function(Game, $scope, Constants) {
      var vm = this;

      vm.endGame = function() {
        Game.setState(Constants.STATE_INTRO);
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

      vm.stateIntro = function() {
        return vm.state === Constants.STATE_INTRO;
      };

      vm.statePlay = function() {
        return vm.state === Constants.STATE_PLAY;
      };

      vm.stateVictory = function() {
        return vm.state === Constants.STATE_VICTORY;
      };

      vm.stateDraw = function() {
        return vm.state === Constants.STATE_DRAW;
      };

      $scope.$watch(function() {
        return Game.getCurrentPlayer();
      }, function(newVal) {
        vm.currentPlayer = newVal;
      });

      vm.cellClicked = function(item) {
        Game.selectCell(item);
      };
    },
    templateUrl: 'components/ticTacToe/ticTacToe.html'
  })