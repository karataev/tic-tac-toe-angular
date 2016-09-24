app
  .factory('Game', [function() {

    var empty = {title: ''};

    var grid = [
      [{title: ''}, {title: ''}, {title: ''}],
      [{title: ''}, {title: ''}, {title: ''}],
      [{title: ''}, {title: ''}, {title: ''}]
    ];

    function getGrid() {
      return grid;
    }

    return {
      getGrid: getGrid,

      CELL_EMPTY: '',
      CELL_X: 'X',
      CELL_O: 'O'
    }
  }])