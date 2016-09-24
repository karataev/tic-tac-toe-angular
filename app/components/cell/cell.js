app
  .component('cell', {
    controller: function(Game, Constants) {
      var vm = this;

      vm.click = function() {
        vm.onClick(vm.data);
      };

      vm.isEmpty = function() {
        return vm.data.title === Constants.CELL_EMPTY;
      };

      vm.isX = function() {
        return vm.data.title === Constants.CELL_X;
      };

      vm.isO = function() {
        return vm.data.title === Constants.CELL_O;
      };

      // console.log(vm.data);
    },
    bindings: {
      data: '<',
      onClick: '='
    },
    templateUrl: 'components/cell/cell.html'
  })