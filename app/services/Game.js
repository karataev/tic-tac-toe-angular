app
  .factory('Game', [function() {

    var CELL_EMPTY = '';
    var CELL_X = 'X';
    var CELL_O = 'O';

    var STATE_INTRO = 'intro';
    var STATE_PLAY = 'play';

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

    return {
      getGrid: getGrid,
      startGame: startGame,
      getCurrentPlayer: getCurrentPlayer,
      changeTurn: changeTurn,
      getState: getState,
      setState: setState,

      CELL_EMPTY: CELL_EMPTY,
      CELL_X: CELL_X,
      CELL_O: CELL_O,

      STATE_INTRO: STATE_INTRO,
      STATE_PLAY: STATE_PLAY
    }
  }])