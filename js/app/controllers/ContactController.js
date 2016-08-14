function ContactController($scope) {
  this.name = 'Bill Gates';
  this.phone = '555-555-5555';
  this.email = 'bill@microsoft.com';

  var vm = this;
 
  this.changeName = function () {
    vm.name = 'New Name'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);