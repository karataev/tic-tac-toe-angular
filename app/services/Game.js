app
  .factory('Game', ['Players', 'Constants', function(Players, Constants) {

    var grid;
    var state = Constants.STATE_INTRO;
    var playerX = Players.getPlayer1();
    var playerO = Players.getPlayer2();
    var currentPlayer;

    function getGrid() {
      return grid;
    }

    function initGrid() {
      grid = [
        [{title: ''}, {title: ''}, {title: ''}],
        [{title: ''}, {title: ''}, {title: ''}],
        [{title: ''}, {title: ''}, {title: ''}]
      ];
    }

    function startGame() {
      initGrid();
      currentPlayer = playerX;
      state = Constants.STATE_PLAY;
    }

    function getCurrentPlayer() {
      return currentPlayer;
    }

    function changeTurn() {
      currentPlayer = currentPlayer === playerX ? playerO : playerX;
    }

    function getState() {
      return state;
    }

    function setState(newState) {
      state = newState;
    }

    function fullGrid() {
      var emptyCells = _.chain(grid)
        .flatten()
        .filter({title: Constants.CELL_EMPTY})
        .value();
      return emptyCells.length === 0;
    }

    function isVictory() {
      function row(index) {
        var c1 = grid[index][0];
        var c2 = grid[index][1];
        var c3 = grid[index][2];
        return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      function column(index) {
        var c1 = grid[0][index];
        var c2 = grid[1][index];
        var c3 = grid[2][index];
        return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      function diagonal1() {
        var c1 = grid[0][0];
        var c2 = grid[1][1];
        var c3 = grid[2][2];
        return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      function diagonal2() {
        var c1 = grid[0][2];
        var c2 = grid[1][1];
        var c3 = grid[2][0];
        return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      return row(0) || row(1) || row(2) || column(0) || column(1) || column(2) || diagonal1() || diagonal2();
    }

    function selectCell(cell) {
      if (state !== Constants.STATE_PLAY) return;

      cell.title = currentPlayer.value;
      if (isVictory()) {
        state = Constants.STATE_VICTORY;
      }
      else if (fullGrid()) {
        state = Constants.STATE_DRAW;
      } else {
        changeTurn();
      }

    }

    return {
      getGrid: getGrid,
      startGame: startGame,
      getCurrentPlayer: getCurrentPlayer,
      changeTurn: changeTurn,
      getState: getState,
      setState: setState,
      selectCell: selectCell
    }
  }])