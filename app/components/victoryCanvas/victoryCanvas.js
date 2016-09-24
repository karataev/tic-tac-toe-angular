app
  .component('victoryCanvas', {
    controller: function($element, Game, Constants) {
      var vm = this;

      var grid = Game.getGrid();

      function getVictoryCoords() {
        var size = 100;
        var offset = size / 2;
        function row(index) {
          var c1 = grid[index][0];
          var c2 = grid[index][1];
          var c3 = grid[index][2];
          return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title && [
              {x: offset, y: index * size + offset},
              {x: size * 3 - offset, y: index * size + offset}
            ];
        }

        function column(index) {
          var c1 = grid[0][index];
          var c2 = grid[1][index];
          var c3 = grid[2][index];
          return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title && [
              {x: offset + index * size, y: offset},
              {x: offset + index * size, y: size * 3 - offset}
            ];
        }

        function diagonal1() {
          var c1 = grid[0][0];
          var c2 = grid[1][1];
          var c3 = grid[2][2];
          return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title && [
              {x: offset, y: offset},
              {x: size * 3 - offset, y: size * 3 - offset}
            ];
        }

        function diagonal2() {
          var c1 = grid[0][2];
          var c2 = grid[1][1];
          var c3 = grid[2][0];
          return c1.title != Constants.CELL_EMPTY && c1.title === c2.title && c2.title === c3.title && [
              {x: size * 3 - offset, y: offset},
              {x: offset, y: size * 3 - offset}
            ];
        }

        return row(0) || row(1) || row(2) || column(0) || column(1) || column(2) || diagonal1() || diagonal2();
      }

      var coords = getVictoryCoords();
      if (!coords) return;

      var canvas = $element.find('.canvas')[0];
      var ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(coords[0].x, coords[0].y);
      ctx.lineTo(coords[1].x, coords[1].y);
      ctx.stroke();
    },
    templateUrl: 'components/victoryCanvas/victoryCanvas.html'
  })