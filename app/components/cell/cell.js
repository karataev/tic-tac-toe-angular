app
  .component('cell', {
    controller: ['Game', function(Game) {
      var vm = this;

      vm.click = function() {
        vm.onClick(vm.data);
      };

      vm.isEmpty = function() {
        return vm.data.title === Game.CELL_EMPTY;
      };

      vm.isX = function() {
        return vm.data.title === Game.CELL_X;
      };

      vm.isO = function() {
        return vm.data.title === Game.CELL_O;
      };

      // console.log(vm.data);
    }],
    bindings: {
      data: '<',
      onClick: '='
    },
    templateUrl: 'components/cell/cell.html'
  })