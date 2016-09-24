app
  .factory('Game', [function() {

    var CELL_EMPTY = '';
    var CELL_X = 'X';
    var CELL_O = 'O';

    var STATE_INTRO = 'intro';
    var STATE_PLAY = 'play';
    var STATE_VICTORY = 'victory';

    var grid;

    var state = STATE_INTRO;

    var playerX = {
      name: 'Player X',
      value: CELL_X
    };
    var playerO = {
      name: 'Player O',
      value: CELL_O
    };
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
      state = STATE_PLAY;
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
        .filter({title: CELL_EMPTY})
        .value();
      return emptyCells.length === 0;
    }

    function isVictory() {
      function row(index) {
        var c1 = grid[index][0];
        var c2 = grid[index][1];
        var c3 = grid[index][2];
        return c1.title != CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      function column(index) {
        var c1 = grid[0][index];
        var c2 = grid[1][index];
        var c3 = grid[2][index];
        return c1.title != CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      function diagonal1() {
        var c1 = grid[0][0];
        var c2 = grid[1][1];
        var c3 = grid[2][2];
        return c1.title != CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      function diagonal2() {
        var c1 = grid[0][2];
        var c2 = grid[1][1];
        var c3 = grid[2][0];
        return c1.title != CELL_EMPTY && c1.title === c2.title && c2.title === c3.title;
      }

      return row(0) || row(1) || row(2) || column(0) || column(1) || column(2) || diagonal1() || diagonal2();
    }

    function selectCell(cell) {
      cell.title = currentPlayer.value;
      if (isVictory()) {
        state = STATE_VICTORY;
      }
      else if (fullGrid()) {
        console.log('GRID IS FULL!');
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
      selectCell: selectCell,

      CELL_EMPTY: CELL_EMPTY,
      CELL_X: CELL_X,
      CELL_O: CELL_O,

      STATE_INTRO: STATE_INTRO,
      STATE_PLAY: STATE_PLAY,
      STATE_VICTORY: STATE_VICTORY
    }
  }])