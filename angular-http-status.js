angular
  .module('ngHttpStatus', [])
  .constant('HttpCodes', {
    CONTINUE: 100,                        // RFC7231 @6.2.1 : https://tools.ietf.org/html/rfc7231#section-6.2.1
    SWITCHING_PROTOCOLS: 101,             // RFC7231 @6.2.2 : https://tools.ietf.org/html/rfc7231#section-6.2.2
    PROCESSING: 102,                      // RFC2518        : https://tools.ietf.org/html/rfc2518
    HEURISTIC_EXPIRATION: 113,            // RFC7234 @5.5.4 : https://tools.ietf.org/html/rfc7234#section-5.5.4
    MISCELLANEOUS_WARNING: 199,           // RFC7234 @5.5.5 : https://tools.ietf.org/html/rfc7234#section-5.5.5

    OK: 200,                              // RFC7231 @6.3.1 : https://tools.ietf.org/html/rfc7231#section-6.3.1
    CREATED: 201,                         // RFC7231 @6.3.2 : https://tools.ietf.org/html/rfc7231#section-6.3.2
    ACCEPTED: 202,                        // RFC7231 @6.3.3 : https://tools.ietf.org/html/rfc7231#section-6.3.3
    NON_AUTHORITATIVE_INFORMATION: 203,   // RFC7231 @6.3.4 : https://tools.ietf.org/html/rfc7231#section-6.3.4
    NO_CONTENT: 204,                      // RFC7231 @6.3.5 : https://tools.ietf.org/html/rfc7231#section-6.3.5
    RESET_CONTENT: 205,                   // RFC7231 @6.3.6 : https://tools.ietf.org/html/rfc7231#section-6.3.6
    PARTIAL_CONTENT: 206,                 // RFC7233 @4.1   : https://tools.ietf.org/html/rfc7233#section-4.1
    MULTI_STATUS: 207,                    // RFC4918        : https://tools.ietf.org/html/rfc4918
    ALREADY_REPORTED: 208,                // RFC5842        : https://tools.ietf.org/html/rfc5842
    TRANSFORMATION_APPLIED: 214,          // RFC7234 @5.5.6 : https://tools.ietf.org/html/rfc7234#section-5.5.6
    IM_USED: 226,                         // RFC3239        : https://tools.ietf.org/html/rfc3239
    MISCELLANEOUS_PERSISTENT_WARNING: 299,// RFC7234 @5.5.7 : https://tools.ietf.org/html/rfc7234#section-5.5.7

    MULTIPLE_CHOICES: 300,                // RFC7231 @6.4.1 : https://tools.ietf.org/html/rfc7231#section-6.4.1
    MOVED_PERMANENTLY: 301,               // RFC7231 @6.4.2 : https://tools.ietf.org/html/rfc7231#section-6.4.2
    FOUND: 302,                           // RFC7231 @6.4.3 : https://tools.ietf.org/html/rfc7231#section-6.4.3
    SEE_OTHER: 303,                       // RFC7231 @6.4.4 : https://tools.ietf.org/html/rfc7231#section-6.4.4
    NOT_MODIFIED: 304,                    // RFC7232 @4.1   : https://tools.ietf.org/html/rfc7232#section-4.1
    USE_PROXY: 305,                       // RFC7231 @6.4.5 : https://tools.ietf.org/html/rfc7231#section-6.4.5
    UNUSED: 306,                          // RFC7231 @6.4.6 : https://tools.ietf.org/html/rfc7231#section-6.4.6
    TEMPORARY_REDIRECT: 307,              // RFC7231 @6.4.7 : https://tools.ietf.org/html/rfc7231#section-6.4.7
    PERMANENT_REDIRECT: 308,              // RFC7538        : https://tools.ietf.org/html/rfc7538
    TOO_MANY_REDIRECTS: 310,

    BAD_REQUEST: 400,                     // RFC7231 @6.5.1 : https://tools.ietf.org/html/rfc7231#section-6.5.1
    UNAUTHORIZED: 401,                    // RFC7235 @3.1   : https://tools.ietf.org/html/rfc7235#section-3.1
    PAYMENT_REQUIRED: 402,                // RFC7231 @6.5.2 : https://tools.ietf.org/html/rfc7231#section-6.5.2
    FORBIDDEN: 403,                       // RFC7231 @6.5.3 : https://tools.ietf.org/html/rfc7231#section-6.5.3
    NOT_FOUND: 404,                       // RFC7231 @6.5.4 : https://tools.ietf.org/html/rfc7231#section-6.5.4
    METHOD_NOT_ALLOWED: 405,              // RFC7231 @6.5.5 : https://tools.ietf.org/html/rfc7231#section-6.5.5
    NOT_ACCEPTABLE: 406,                  // RFC7231 @6.5.6 : https://tools.ietf.org/html/rfc7231#section-6.5.6
    PROXY_AUTHENTICATION_REQUIRED: 407,   // RFC7235 @3.2   : https://tools.ietf.org/html/rfc7235#section-3.2
    REQUEST_TIMEOUT: 408,                 // RFC7231 @6.5.7 : https://tools.ietf.org/html/rfc7231#section-6.5.7
    CONFLICT: 409,                        // RFC7231 @6.5.8 : https://tools.ietf.org/html/rfc7231#section-6.5.8
    GONE: 410,                            // RFC7231 @6.5.9 : https://tools.ietf.org/html/rfc7231#section-6.5.9
    LENGTH_REQUIRED: 411,                 // RFC7231 @6.5.10 : https://tools.ietf.org/html/rfc7231#section-6.5.10
    PRECONDITION_FAILED: 412,             // RFC7232 @4.2    : https://tools.ietf.org/html/rfc7232#section-4.2
    PAYLOAD_TOO_LARGE: 413,               // RFC7231 @6.5.11 : https://tools.ietf.org/html/rfc7231#section-6.5.11
    URI_TOO_LONG: 414,                    // RFC7231 @6.5.12 : https://tools.ietf.org/html/rfc7231#section-6.5.12
    UNSUPPORTED_MEDIA_TYPE: 415,          // RFC7231 @6.5.13 : https://tools.ietf.org/html/rfc7231#section-6.5.13
    RANGE_NOT_SATISFIABLE: 416,           // RFC7233 @4.4    : https://tools.ietf.org/html/rfc7233#section-4.4
    EXPECTATION_FAILED: 417,              // RFC7231 @6.5.14 : https://tools.ietf.org/html/rfc7231#section-6.5.14
    IM_A_TEAPOT: 418,                     // RFC2324         : https://tools.ietf.org/html/rfc2324
    MISDIRECT_REQUEST: 421,               // RFC7540 @9.1.2  : https://tools.ietf.org/html/rfc7540#section-9.1.2
    UNPROCESSABLE_ENTITY: 422,            // RFC4918         : https://tools.ietf.org/html/rfc4918
    LOCKED: 423,                          // RFC4918         : https://tools.ietf.org/html/rfc4918
    FAILED_DEPENDENCY: 424,               // RFC4918         : https://tools.ietf.org/html/rfc4918
    UNORDERED_COLLEcTION: 425,            // RFC3648         : https://tools.ietf.org/html/rfc3648
    UPGRADE_REQUIRED: 426,                // RFC7231 @6.5.15 : https://tools.ietf.org/html/rfc7231#section-6.5.15
    PRECONDITION_REQUIRED: 428,           // RFC6585         : https://tools.ietf.org/html/rfc6585
    TOO_MANY_REQUEST: 429,                // RFC6585         : https://tools.ietf.org/html/rfc6585
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431, // RFC6585         : https://tools.ietf.org/html/rfc6585

    INTERNAL_SERVER_ERROR: 500,           // RFC7231 @6.6.1 : https://tools.ietf.org/html/rfc7231#section-6.6.1
    NOT_IMPLEMENTED: 501,                 // RFC7231 @6.6.2 : https://tools.ietf.org/html/rfc7231#section-6.6.2
    BAD_GATEWAY: 502,                     // RFC7231 @6.6.3 : https://tools.ietf.org/html/rfc7231#section-6.6.3
    SERVICE_UNAVAILABLE: 503,             // RFC7231 @6.6.4 : https://tools.ietf.org/html/rfc7231#section-6.6.4
    GATEWAY_TIMEOUT: 504,                 // RFC7231 @6.6.5 : https://tools.ietf.org/html/rfc7231#section-6.6.5
    HTTP_VERSION_NOT_SUPPORTED: 505,      // RFC7231 @6.6.6 : https://tools.ietf.org/html/rfc7231#section-6.6.6
    VARIANT_ALSO_NEGOTIATES: 506,         // RFC2295         : https://tools.ietf.org/html/rfc2295
    INSUFFICIENT_STORAGE: 507,            // RFC4918         : https://tools.ietf.org/html/rfc4918
    LOOP_DETECTED: 508,                   // RFC5842         : https://tools.ietf.org/html/rfc5842
    NOT_EXTENDED: 510,                    // RFC2774         : https://tools.ietf.org/html/rfc2774
    NETWORK_AUTHENTICATION_REQUIRED: 511  // RFC6585         : https://tools.ietf.org/html/rfc6585
  })
  .factory('HttpStatus', ['HttpCodes', function(HttpCodes) {
    /**
     * Format status into a human readable version
     *
     * @see https://stackoverflow.com/questions/2332811/capitalize-words-in-string
     * @param {String} status
     * @example
     * Input:  "MISCELLANEOUS_PERSISTENT_WARNING"
     * Output: "Miscellaneous Persistent Warning"
     * @returns {String}
     */
    var formatStatus = function(status) {
      return status
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/(^|\s)\S/g, function(firstLetter) { return firstLetter.toUpperCase() });
    };

    return {
      toString: function(status) {
        if (angular.isNumber(status) === false) {
          throw new TypeError(status + ' is not a number and obviously not a valid HTTP status code.')
        }

        var keys = Object.keys(HttpCodes);

        for (var i = 0 ; i < keys.length ; i++) {
          if (HttpCodes[keys[i]] === status) {
            return formatStatus(keys[i]);
          }
        }

        return undefined;
      }
    };
  }]);
