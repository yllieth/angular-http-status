angular
  .module('demo-angular-http-status', ['ngHttpStatus'])
  .controller('demoCtrl', function(HttpCodes, HttpStatus) {

    this.code = 200;
    this.text = 'Ok';

    this.statusCodes = HttpCodes;

    this.toString = function(status) {
      return HttpStatus.toString(status);
    };

    this.toStatus = function(meaning) {
      var statusText = meaning.toUpperCase().replace(' ', '_');

      return angular.isDefined(HttpCodes[statusText])
        ? HttpCodes[statusText]
        : '<< Invalid key ' + statusText + ' >>'
    }
  });