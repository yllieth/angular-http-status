# angular-http-status

> Demo: http://yllieth.github.io/angular-http-status/app/index.html

Angular stuff to easily convert status text into its HTTP code and _vice versa_.
 
I only care about _real_ Http statuses, so I used the list from 
http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml where each code is attached to a [RFC](https://github.com/yllieth/angular-http-status/blob/master/angular-http-status.js).

## Installation

### Bower

```
bower install angular-http-status --save
```

Once the lib is downloaded, 

1. add a reference in your index.html 

    `<script type="application/javascript" src="../bower_components/angular-http-status/angular-http-status.js"></script>`
    
2. add the module in your angular application
    
    ```
    angular
      .module('YOUR-ANGULAR-APP-NAME', [
        'ngHttpStatus'
      ])
      .config(...
    ```

3. enjoy!

## Usage

### The `HttpCodes` constant

It's a _big_ object with status text as keys and status codes as values, like:

```json
{
    "CONTINUE": 100,            // RFC7231 @6.2.1 : https://tools.ietf.org/html/rfc7231#section-6.2.1
    "SWITCHING_PROTOCOLS": 101, // RFC7231 @6.2.2 : https://tools.ietf.org/html/rfc7231#section-6.2.2
    "PROCESSING": 102,          // RFC2518        : https://tools.ietf.org/html/rfc2518
    "..."
```

Once you adds `HttpCodes` as dependency in a controller / service / ..., you cas use it like:

```javascript
if (rejection.status === HttpCodes.UNAUTHORIZED) {
  $state.go('login')
}
```

### The `HttpStatus` factory

Defines the following methods:

- `toString({Number} status)` : takes a valid HTTP status code and returns its meaning 
(`undefined` if given status isn't in the list)

### Example

Here is the code of the controller used for the demo app:

```javascript
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
```

# License

DBAD. See the [LICENSE](https://github.com/yllieth/angular-http-status/blob/master/LICENSE.md) for more details.

# Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
