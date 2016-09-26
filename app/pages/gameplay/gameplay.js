app
  .component('gameplay', {
    controller: function(Game, $scope, Constants) {
      var vm = this;

      Game.startGame();

      vm.restartGame = function() {
        Game.startGame();
      };

      $scope.$watch(() => Game.getState(), newVal => {
        vm.state = newVal;
      });

      $scope.$watch(() => Game.getGrid(), newVal => {
        vm.grid = newVal;
      });

      $scope.$watch(() => Game.getCurrentPlayer(), newVal => {
        vm.currentPlayer = newVal;
      });

      vm.statePlay = () => vm.state === Constants.STATE_PLAY;
      vm.stateVictory = () => vm.state === Constants.STATE_VICTORY;
      vm.stateDraw = () => vm.state === Constants.STATE_DRAW;

      vm.cellClicked = function(item) {
        Game.selectCell(item);
      };
    },
    templateUrl: 'pages/gameplay/gameplay.html'
  })