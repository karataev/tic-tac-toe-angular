app
  .component('ticTacToe', {
    controller: ['Game', function(Game) {
      var vm = this;

      vm.grid = Game.getGrid();

      vm.cellClicked = function(item) {
        if (item.title === Game.CELL_EMPTY) item.title = Game.CELL_X;
        else if (item.title === Game.CELL_X) item.title = Game.CELL_O;
        else if (item.title === Game.CELL_O) item.title = Game.CELL_EMPTY;
      };
    }],
    templateUrl: 'components/ticTacToe/ticTacToe.html'
  })