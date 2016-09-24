app
  .factory('Players', ['Constants', function(Constants) {

    var playerX = {
      name: 'X',
      value: Constants.CELL_X
    };
    var playerO = {
      name: 'O',
      value: Constants.CELL_O
    };

    function getPlayer1() {
      return playerX;
    }

    function getPlayer2() {
      return playerO;
    }

    return {
      getPlayer1: getPlayer1,
      getPlayer2: getPlayer2
    }
  }])