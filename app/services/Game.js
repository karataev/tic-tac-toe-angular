app
  .factory('Game', [function() {

    var CELL_EMPTY = '';
    var CELL_X = 'X';
    var CELL_O = 'O';

    var grid = [
      [{title: ''}, {title: ''}, {title: ''}],
      [{title: ''}, {title: ''}, {title: ''}],
      [{title: ''}, {title: ''}, {title: ''}]
    ];

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

    function startGame() {
      currentPlayer = playerX;
    }

    function getCurrentPlayer() {
      return currentPlayer;
    }

    function changeTurn() {
      currentPlayer = currentPlayer === playerX ? playerO : playerX;
    }

    return {
      getGrid: getGrid,
      startGame: startGame,
      getCurrentPlayer: getCurrentPlayer,
      changeTurn: changeTurn,

      CELL_EMPTY: CELL_EMPTY,
      CELL_X: CELL_X,
      CELL_O: CELL_O
    }
  }])