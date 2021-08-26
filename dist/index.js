(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('electron-re'), require('http'), require('https'), require('url'), require('stream'), require('assert'), require('debug'), require('zlib'), require('@angular/core'), require('events'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define(['exports', 'electron-re', 'http', 'https', 'url', 'stream', 'assert', 'debug', 'zlib', '@angular/core', 'events', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.qingCore = {}, global.electronRe, global.require$$1, global.require$$2, global.require$$0$1, global.require$$3, global.require$$4, global.require$$0, global.require$$8, global.core, global.events, global.rxjs));
}(this, (function (exports, electronRe, require$$1, require$$2, require$$0$1, require$$3, require$$4, require$$0, require$$8, core, events, rxjs) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
    var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
    var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
    var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
    var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
    var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);

    var Visibility;
    (function (Visibility) {
        Visibility["Private"] = "Private";
        Visibility["Internal"] = "Internal";
        Visibility["Public"] = "Public";
    })(Visibility || (Visibility = {}));
    var Game = /** @class */ (function () {
        function Game(data) {
            Object.assign(this, data);
        }
        Game.prototype.getUri = function (version) {
            // mjxmjx\game\5f1a49e2b5ad7b67aae31170\0.0.4\5f1a49e2b5ad7b67aae31170.zip
            return this.owner.username + "/game/" + this._id + "/" + version + "/" + this._id + ".zip";
        };
        Object.defineProperty(Game.prototype, "directory", {
            get: function () {
                return this.owner.username + "/game/" + this._id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "pi", {
            get: function () {
                return this.directory + "/" + this._id + ".pi";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Game.prototype, "package", {
            get: function () {
                return this.directory + "/package.json";
            },
            enumerable: false,
            configurable: true
        });
        return Game;
    }());

    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());

    var ComponentType$1;
    (function (ComponentType) {
        ComponentType["SpawnPointNode"] = "SpawnPointNode";
        ComponentType["ElementNode"] = "ElementNode";
        ComponentType["TerrainNode"] = "TerrainNode";
        ComponentType["CustomNode"] = "CustomNode";
        ComponentType["EffectNode"] = "EffectNode";
        ComponentType["CarpetNode"] = "CarpetNode";
        ComponentType["WallNode"] = "WallNode";
    })(ComponentType$1 || (ComponentType$1 = {}));
    var Component = /** @class */ (function () {
        function Component() {
        }
        return Component;
    }());

    exports.UIEvents = void 0;
    (function (UIEvents) {
        UIEvents["TOAST"] = "Toast";
        UIEvents["ALERT"] = "Alert";
        UIEvents["OPEN_DIALOG"] = "OpenDialog";
        UIEvents["CLOSE_DIALOG"] = "CloseDialog";
        UIEvents["INSERT_MENU"] = "InsertMenu";
        UIEvents["ADD_STATUS"] = "AddStatus";
        UIEvents["LOAD_IN_MENU"] = "LoadInMenu";
        UIEvents["LOAD_IN_SIDEBAR"] = "LoadInSidebar";
        UIEvents["LOAD_IN_EDITORAREA"] = "LoadInEditorarea";
        UIEvents["LOAD_IN_PANEL"] = "LoadInPanel";
        UIEvents["LOAD_IN_WIDGETBAR"] = "LoadInWidgetbar";
    })(exports.UIEvents || (exports.UIEvents = {}));
    exports.IOEvents = void 0;
    (function (IOEvents) {
        IOEvents["LISTDIR"] = "list-dir";
        IOEvents["REMOVEDIR"] = "remove-dir";
        IOEvents["READFILE"] = "read-file";
        IOEvents["WRITEFILE"] = "write-file";
        IOEvents["REMOVEFILE"] = "remove-file";
        IOEvents["READJSON"] = "read-json";
        IOEvents["WRITEJSON"] = "write-json";
        IOEvents["DOWNLOADFILE"] = "download-file";
        IOEvents["UPLOADFILE"] = "upload-file";
        IOEvents["COPYFILES"] = "copy-files";
        IOEvents["ZIPFILES"] = "zip-files";
        IOEvents["UNZIP"] = "unzip";
    })(exports.IOEvents || (exports.IOEvents = {}));

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var axios$2 = {exports: {}};

    var bind$2 = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };

    var bind$1 = bind$2;

    /*global toString:true*/

    // utils is a library of generic helper functions non-specific to axios

    var toString = Object.prototype.toString;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    function isArray$3(val) {
      return toString.call(val) === '[object Array]';
    }

    /**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    function isUndefined(val) {
      return typeof val === 'undefined';
    }

    /**
     * Determine if a value is a Buffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer$1(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    function isArrayBuffer(val) {
      return toString.call(val) === '[object ArrayBuffer]';
    }

    /**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    function isFormData(val) {
      return (typeof FormData !== 'undefined') && (val instanceof FormData);
    }

    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      var result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
    function isString(val) {
      return typeof val === 'string';
    }

    /**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
    function isNumber(val) {
      return typeof val === 'number';
    }

    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    function isObject(val) {
      return val !== null && typeof val === 'object';
    }

    /**
     * Determine if a value is a plain Object
     *
     * @param {Object} val The value to test
     * @return {boolean} True if value is a plain Object, otherwise false
     */
    function isPlainObject(val) {
      if (toString.call(val) !== '[object Object]') {
        return false;
      }

      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }

    /**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
    function isDate(val) {
      return toString.call(val) === '[object Date]';
    }

    /**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
    function isFile(val) {
      return toString.call(val) === '[object File]';
    }

    /**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    function isBlob(val) {
      return toString.call(val) === '[object Blob]';
    }

    /**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    function isFunction(val) {
      return toString.call(val) === '[object Function]';
    }

    /**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
    }

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
    function trim$1(str) {
      return str.replace(/^\s*/, '').replace(/\s*$/, '');
    }

    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     * nativescript
     *  navigator.product -> 'NativeScript' or 'NS'
     */
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                               navigator.product === 'NativeScript' ||
                                               navigator.product === 'NS')) {
        return false;
      }
      return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
      );
    }

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
    function forEach(obj, fn) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray$3(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function merge$1(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge$1(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge$1({}, val);
        } else if (isArray$3(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
          a[key] = bind$1(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }

    /**
     * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
     *
     * @param {string} content with BOM
     * @return {string} content value without BOM
     */
    function stripBOM(content) {
      if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
      }
      return content;
    }

    var utils$h = {
      isArray: isArray$3,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer$1,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isPlainObject: isPlainObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge$1,
      extend: extend,
      trim: trim$1,
      stripBOM: stripBOM
    };

    var utils$g = utils$h;

    function encode$1(val) {
      return encodeURIComponent(val).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
    var buildURL$3 = function buildURL(url, params, paramsSerializer) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }

      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils$g.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];

        utils$g.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === 'undefined') {
            return;
          }

          if (utils$g.isArray(val)) {
            key = key + '[]';
          } else {
            val = [val];
          }

          utils$g.forEach(val, function parseValue(v) {
            if (utils$g.isDate(v)) {
              v = v.toISOString();
            } else if (utils$g.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode$1(key) + '=' + encode$1(v));
          });
        });

        serializedParams = parts.join('&');
      }

      if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    };

    var utils$f = utils$h;

    function InterceptorManager$1() {
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    InterceptorManager$1.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
      });
      return this.handlers.length - 1;
    };

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
    InterceptorManager$1.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
    InterceptorManager$1.prototype.forEach = function forEach(fn) {
      utils$f.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };

    var InterceptorManager_1 = InterceptorManager$1;

    var utils$e = utils$h;

    /**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
    var transformData$1 = function transformData(data, headers, fns) {
      /*eslint no-param-reassign:0*/
      utils$e.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });

      return data;
    };

    var isCancel$1 = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };

    var utils$d = utils$h;

    var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
      utils$d.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };

    /**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The error.
     */
    var enhanceError$2 = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }

      error.request = request;
      error.response = response;
      error.isAxiosError = true;

      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    };

    var enhanceError$1 = enhanceError$2;

    /**
     * Create an Error with the specified message, config, error code, request and response.
     *
     * @param {string} message The error message.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The created error.
     */
    var createError$3 = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError$1(error, config, code, request, response);
    };

    var createError$2 = createError$3;

    /**
     * Resolve or reject a Promise based on response status.
     *
     * @param {Function} resolve A function that resolves the promise.
     * @param {Function} reject A function that rejects the promise.
     * @param {object} response The response.
     */
    var settle$2 = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError$2(
          'Request failed with status code ' + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };

    var utils$c = utils$h;

    var cookies$1 = (
      utils$c.isStandardBrowserEnv() ?

      // Standard browser envs support document.cookie
        (function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + '=' + encodeURIComponent(value));

              if (utils$c.isNumber(expires)) {
                cookie.push('expires=' + new Date(expires).toGMTString());
              }

              if (utils$c.isString(path)) {
                cookie.push('path=' + path);
              }

              if (utils$c.isString(domain)) {
                cookie.push('domain=' + domain);
              }

              if (secure === true) {
                cookie.push('secure');
              }

              document.cookie = cookie.join('; ');
            },

            read: function read(name) {
              var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
              return (match ? decodeURIComponent(match[3]) : null);
            },

            remove: function remove(name) {
              this.write(name, '', Date.now() - 86400000);
            }
          };
        })() :

      // Non standard browser env (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() { return null; },
            remove: function remove() {}
          };
        })()
    );

    /**
     * Determines whether the specified URL is absolute
     *
     * @param {string} url The URL to test
     * @returns {boolean} True if the specified URL is absolute, otherwise false
     */
    var isAbsoluteURL$1 = function isAbsoluteURL(url) {
      // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
      // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
      // by any combination of letters, digits, plus, period, or hyphen.
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };

    /**
     * Creates a new URL by combining the specified URLs
     *
     * @param {string} baseURL The base URL
     * @param {string} relativeURL The relative URL
     * @returns {string} The combined URL
     */
    var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
    };

    var isAbsoluteURL = isAbsoluteURL$1;
    var combineURLs = combineURLs$1;

    /**
     * Creates a new URL by combining the baseURL with the requestedURL,
     * only when the requestedURL is not already an absolute URL.
     * If the requestURL is absolute, this function returns the requestedURL untouched.
     *
     * @param {string} baseURL The base URL
     * @param {string} requestedURL Absolute or relative URL to combine
     * @returns {string} The combined full path
     */
    var buildFullPath$2 = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };

    var utils$b = utils$h;

    // Headers whose duplicates are ignored by node
    // c.f. https://nodejs.org/api/http.html#http_message_headers
    var ignoreDuplicateOf = [
      'age', 'authorization', 'content-length', 'content-type', 'etag',
      'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
      'last-modified', 'location', 'max-forwards', 'proxy-authorization',
      'referer', 'retry-after', 'user-agent'
    ];

    /**
     * Parse headers into an object
     *
     * ```
     * Date: Wed, 27 Aug 2014 08:58:49 GMT
     * Content-Type: application/json
     * Connection: keep-alive
     * Transfer-Encoding: chunked
     * ```
     *
     * @param {String} headers Headers needing to be parsed
     * @returns {Object} Headers parsed into an object
     */
    var parseHeaders$1 = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;

      if (!headers) { return parsed; }

      utils$b.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils$b.trim(line.substr(0, i)).toLowerCase();
        val = utils$b.trim(line.substr(i + 1));

        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === 'set-cookie') {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
          }
        }
      });

      return parsed;
    };

    var utils$a = utils$h;

    var isURLSameOrigin$1 = (
      utils$a.isStandardBrowserEnv() ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
        (function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement('a');
          var originURL;

          /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
          function resolveURL(url) {
            var href = url;

            if (msie) {
            // IE needs attribute set twice to normalize properties
              urlParsingNode.setAttribute('href', href);
              href = urlParsingNode.href;
            }

            urlParsingNode.setAttribute('href', href);

            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                urlParsingNode.pathname :
                '/' + urlParsingNode.pathname
            };
          }

          originURL = resolveURL(window.location.href);

          /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
          return function isURLSameOrigin(requestURL) {
            var parsed = (utils$a.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
          };
        })() :

      // Non standard browser envs (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        })()
    );

    var utils$9 = utils$h;
    var settle$1 = settle$2;
    var cookies = cookies$1;
    var buildURL$2 = buildURL$3;
    var buildFullPath$1 = buildFullPath$2;
    var parseHeaders = parseHeaders$1;
    var isURLSameOrigin = isURLSameOrigin$1;
    var createError$1 = createError$3;

    var xhr = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;

        if (utils$9.isFormData(requestData)) {
          delete requestHeaders['Content-Type']; // Let the browser set it
        }

        var request = new XMLHttpRequest();

        // HTTP basic authentication
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
          requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }

        var fullPath = buildFullPath$1(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL$2(fullPath, config.params, config.paramsSerializer), true);

        // Set the request timeout in MS
        request.timeout = config.timeout;

        // Listen for ready state
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }

          // The request errored out and we didn't get a response, this will be
          // handled by onerror instead
          // With one exception: request that using file: protocol, most browsers
          // will return status as 0 even though it's a successful request
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
            return;
          }

          // Prepare the response
          var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request
          };

          settle$1(resolve, reject, response);

          // Clean up request
          request = null;
        };

        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }

          reject(createError$1('Request aborted', config, 'ECONNABORTED', request));

          // Clean up request
          request = null;
        };

        // Handle low level network errors
        request.onerror = function handleError() {
          // Real errors are hidden from us by the browser
          // onerror should only fire if it's a network error
          reject(createError$1('Network Error', config, null, request));

          // Clean up request
          request = null;
        };

        // Handle timeout
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError$1(timeoutErrorMessage, config, 'ECONNABORTED',
            request));

          // Clean up request
          request = null;
        };

        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils$9.isStandardBrowserEnv()) {
          // Add xsrf header
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
            cookies.read(config.xsrfCookieName) :
            undefined;

          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }

        // Add headers to the request
        if ('setRequestHeader' in request) {
          utils$9.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
              // Remove Content-Type if data is undefined
              delete requestHeaders[key];
            } else {
              // Otherwise add header to the request
              request.setRequestHeader(key, val);
            }
          });
        }

        // Add withCredentials to request if needed
        if (!utils$9.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }

        // Add responseType to request if needed
        if (config.responseType) {
          try {
            request.responseType = config.responseType;
          } catch (e) {
            // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
            // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
            if (config.responseType !== 'json') {
              throw e;
            }
          }
        }

        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
          request.addEventListener('progress', config.onDownloadProgress);
        }

        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
          request.upload.addEventListener('progress', config.onUploadProgress);
        }

        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }

            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
          });
        }

        if (!requestData) {
          requestData = null;
        }

        // Send the request
        request.send(requestData);
      });
    };

    var followRedirects = {exports: {}};

    var debug$5;
    try {
      /* eslint global-require: off */
      debug$5 = require$$0__default['default']("follow-redirects");
    }
    catch (error) {
      debug$5 = function () { /* */ };
    }
    var debug_1$1 = debug$5;

    var url$1 = require$$0__default$1['default'];
    var URL = url$1.URL;
    var http$1 = require$$1__default['default'];
    var https$1 = require$$2__default['default'];
    var Writable = require$$3__default['default'].Writable;
    var assert = require$$4__default['default'];
    var debug$4 = debug_1$1;

    // Create handlers that pass events from native requests
    var eventHandlers = Object.create(null);
    ["abort", "aborted", "connect", "error", "socket", "timeout"].forEach(function (event) {
      eventHandlers[event] = function (arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });

    // Error types with codes
    var RedirectionError = createErrorType(
      "ERR_FR_REDIRECTION_FAILURE",
      ""
    );
    var TooManyRedirectsError = createErrorType(
      "ERR_FR_TOO_MANY_REDIRECTS",
      "Maximum number of redirects exceeded"
    );
    var MaxBodyLengthExceededError = createErrorType(
      "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
      "Request body larger than maxBodyLength limit"
    );
    var WriteAfterEndError = createErrorType(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end"
    );

    // An HTTP(S) request that can be redirected
    function RedirectableRequest(options, responseCallback) {
      // Initialize the request
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];

      // Attach a callback if passed
      if (responseCallback) {
        this.on("response", responseCallback);
      }

      // React to responses of native requests
      var self = this;
      this._onNativeResponse = function (response) {
        self._processResponse(response);
      };

      // Perform the first request
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);

    // Writes buffered data to the current native request
    RedirectableRequest.prototype.write = function (data, encoding, callback) {
      // Writing is not allowed if end has been called
      if (this._ending) {
        throw new WriteAfterEndError();
      }

      // Validate input and shift parameters if necessary
      if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }

      // Ignore empty buffers, since writing them doesn't invoke the callback
      // https://github.com/nodejs/node/issues/22066
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      // Only write when we don't exceed the maximum body length
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data: data, encoding: encoding });
        this._currentRequest.write(data, encoding, callback);
      }
      // Error when we exceed the maximum body length
      else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };

    // Ends the current native request
    RedirectableRequest.prototype.end = function (data, encoding, callback) {
      // Shift parameters if necessary
      if (typeof data === "function") {
        callback = data;
        data = encoding = null;
      }
      else if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }

      // Write data if needed and end
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      }
      else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function () {
          self._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };

    // Sets a header value on the current native request
    RedirectableRequest.prototype.setHeader = function (name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };

    // Clears a header value on the current native request
    RedirectableRequest.prototype.removeHeader = function (name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };

    // Global timeout for all underlying requests
    RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
      if (callback) {
        this.once("timeout", callback);
      }

      if (this.socket) {
        startTimer(this, msecs);
      }
      else {
        var self = this;
        this._currentRequest.once("socket", function () {
          startTimer(self, msecs);
        });
      }

      this.once("response", clearTimer);
      this.once("error", clearTimer);

      return this;
    };

    function startTimer(request, msecs) {
      clearTimeout(request._timeout);
      request._timeout = setTimeout(function () {
        request.emit("timeout");
      }, msecs);
    }

    function clearTimer() {
      clearTimeout(this._timeout);
    }

    // Proxy all other public ClientRequest methods
    [
      "abort", "flushHeaders", "getHeader",
      "setNoDelay", "setSocketKeepAlive",
    ].forEach(function (method) {
      RedirectableRequest.prototype[method] = function (a, b) {
        return this._currentRequest[method](a, b);
      };
    });

    // Proxy all public ClientRequest properties
    ["aborted", "connection", "socket"].forEach(function (property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function () { return this._currentRequest[property]; },
      });
    });

    RedirectableRequest.prototype._sanitizeOptions = function (options) {
      // Ensure headers are always present
      if (!options.headers) {
        options.headers = {};
      }

      // Since http.request treats host as an alias of hostname,
      // but the url module interprets host as hostname plus port,
      // eliminate the host property to avoid confusion.
      if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }

      // Complete the URL object when necessary
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        }
        else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };


    // Executes the next native request (initial or redirect)
    RedirectableRequest.prototype._performRequest = function () {
      // Load the native protocol
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }

      // If specified, use the agent corresponding to the protocol
      // (HTTP and HTTPS use different types of agents)
      if (this._options.agents) {
        var scheme = protocol.substr(0, protocol.length - 1);
        this._options.agent = this._options.agents[scheme];
      }

      // Create the native request
      var request = this._currentRequest =
            nativeProtocol.request(this._options, this._onNativeResponse);
      this._currentUrl = url$1.format(this._options);

      // Set up event handlers
      request._redirectable = this;
      for (var event in eventHandlers) {
        /* istanbul ignore else */
        if (event) {
          request.on(event, eventHandlers[event]);
        }
      }

      // End a redirected request
      // (The first request must be ended explicitly with RedirectableRequest#end)
      if (this._isRedirect) {
        // Write the request entity and end.
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          // Only write if this request has not been redirected yet
          /* istanbul ignore else */
          if (request === self._currentRequest) {
            // Report any write errors
            /* istanbul ignore if */
            if (error) {
              self.emit("error", error);
            }
            // Write the next buffer if there are still left
            else if (i < buffers.length) {
              var buffer = buffers[i++];
              /* istanbul ignore else */
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            }
            // End the request if `end` has been called on us
            else if (self._ended) {
              request.end();
            }
          }
        }());
      }
    };

    // Processes a response from the current native request
    RedirectableRequest.prototype._processResponse = function (response) {
      // Store the redirected response
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode: statusCode,
        });
      }

      // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
      // that further action needs to be taken by the user agent in order to
      // fulfill the request. If a Location header field is provided,
      // the user agent MAY automatically redirect its request to the URI
      // referenced by the Location field value,
      // even if the specific status code is not understood.
      var location = response.headers.location;
      if (location && this._options.followRedirects !== false &&
          statusCode >= 300 && statusCode < 400) {
        // Abort the current request
        this._currentRequest.removeAllListeners();
        this._currentRequest.on("error", noop);
        this._currentRequest.abort();
        // Discard the remainder of the response to avoid waiting for data
        response.destroy();

        // RFC7231§6.4: A client SHOULD detect and intervene
        // in cyclical redirections (i.e., "infinite" redirection loops).
        if (++this._redirectCount > this._options.maxRedirects) {
          this.emit("error", new TooManyRedirectsError());
          return;
        }

        // RFC7231§6.4: Automatic redirection needs to done with
        // care for methods not known to be safe, […]
        // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
        // the request method from POST to GET for the subsequent request.
        if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
            // RFC7231§6.4.4: The 303 (See Other) status code indicates that
            // the server is redirecting the user agent to a different resource […]
            // A user agent can perform a retrieval request targeting that URI
            // (a GET or HEAD request if using HTTP) […]
            (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
          this._options.method = "GET";
          // Drop a possible entity and headers related to it
          this._requestBodyBuffers = [];
          removeMatchingHeaders(/^content-/i, this._options.headers);
        }

        // Drop the Host header, as the redirect might lead to a different host
        var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) ||
          url$1.parse(this._currentUrl).hostname;

        // Create the redirected request
        var redirectUrl = url$1.resolve(this._currentUrl, location);
        debug$4("redirecting to", redirectUrl);
        this._isRedirect = true;
        var redirectUrlParts = url$1.parse(redirectUrl);
        Object.assign(this._options, redirectUrlParts);

        // Drop the Authorization header if redirecting to another host
        if (redirectUrlParts.hostname !== previousHostName) {
          removeMatchingHeaders(/^authorization$/i, this._options.headers);
        }

        // Evaluate the beforeRedirect callback
        if (typeof this._options.beforeRedirect === "function") {
          var responseDetails = { headers: response.headers };
          try {
            this._options.beforeRedirect.call(null, this._options, responseDetails);
          }
          catch (err) {
            this.emit("error", err);
            return;
          }
          this._sanitizeOptions(this._options);
        }

        // Perform the redirected request
        try {
          this._performRequest();
        }
        catch (cause) {
          var error = new RedirectionError("Redirected request failed: " + cause.message);
          error.cause = cause;
          this.emit("error", error);
        }
      }
      else {
        // The response is not a redirect; return it as-is
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);

        // Clean up
        this._requestBodyBuffers = [];
      }
    };

    // Wraps the key/value object of protocols with redirect functionality
    function wrap(protocols) {
      // Default settings
      var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024,
      };

      // Wrap each protocol
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function (scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

        // Executes a request, following redirects
        function request(input, options, callback) {
          // Parse parameters
          if (typeof input === "string") {
            var urlStr = input;
            try {
              input = urlToOptions(new URL(urlStr));
            }
            catch (err) {
              /* istanbul ignore next */
              input = url$1.parse(urlStr);
            }
          }
          else if (URL && (input instanceof URL)) {
            input = urlToOptions(input);
          }
          else {
            callback = options;
            options = input;
            input = { protocol: protocol };
          }
          if (typeof options === "function") {
            callback = options;
            options = null;
          }

          // Set defaults
          options = Object.assign({
            maxRedirects: exports.maxRedirects,
            maxBodyLength: exports.maxBodyLength,
          }, input, options);
          options.nativeProtocols = nativeProtocols;

          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug$4("options", options);
          return new RedirectableRequest(options, callback);
        }

        // Executes a GET request, following redirects
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }

        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true },
        });
      });
      return exports;
    }

    /* istanbul ignore next */
    function noop() { /* empty */ }

    // from https://github.com/nodejs/node/blob/master/lib/internal/url.js
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ?
          /* istanbul ignore next */
          urlObject.hostname.slice(1, -1) :
          urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href,
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }

    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue;
    }

    function createErrorType(code, defaultMessage) {
      function CustomError(message) {
        Error.captureStackTrace(this, this.constructor);
        this.message = message || defaultMessage;
      }
      CustomError.prototype = new Error();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      CustomError.prototype.code = code;
      return CustomError;
    }

    // Exports
    followRedirects.exports = wrap({ http: http$1, https: https$1 });
    followRedirects.exports.wrap = wrap;

    var name = "axios";
    var version = "0.21.0";
    var description = "Promise based HTTP client for the browser and node.js";
    var main = "index.js";
    var scripts = {
    	test: "grunt test && bundlesize",
    	start: "node ./sandbox/server.js",
    	build: "NODE_ENV=production grunt build",
    	preversion: "npm test",
    	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
    	postversion: "git push && git push --tags",
    	examples: "node ./examples/server.js",
    	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
    	fix: "eslint --fix lib/**/*.js"
    };
    var repository = {
    	type: "git",
    	url: "https://github.com/axios/axios.git"
    };
    var keywords = [
    	"xhr",
    	"http",
    	"ajax",
    	"promise",
    	"node"
    ];
    var author = "Matt Zabriskie";
    var license = "MIT";
    var bugs = {
    	url: "https://github.com/axios/axios/issues"
    };
    var homepage = "https://github.com/axios/axios";
    var devDependencies = {
    	bundlesize: "^0.17.0",
    	coveralls: "^3.0.0",
    	"es6-promise": "^4.2.4",
    	grunt: "^1.0.2",
    	"grunt-banner": "^0.6.0",
    	"grunt-cli": "^1.2.0",
    	"grunt-contrib-clean": "^1.1.0",
    	"grunt-contrib-watch": "^1.0.0",
    	"grunt-eslint": "^20.1.0",
    	"grunt-karma": "^2.0.0",
    	"grunt-mocha-test": "^0.13.3",
    	"grunt-ts": "^6.0.0-beta.19",
    	"grunt-webpack": "^1.0.18",
    	"istanbul-instrumenter-loader": "^1.0.0",
    	"jasmine-core": "^2.4.1",
    	karma: "^1.3.0",
    	"karma-chrome-launcher": "^2.2.0",
    	"karma-coverage": "^1.1.1",
    	"karma-firefox-launcher": "^1.1.0",
    	"karma-jasmine": "^1.1.1",
    	"karma-jasmine-ajax": "^0.1.13",
    	"karma-opera-launcher": "^1.0.0",
    	"karma-safari-launcher": "^1.0.0",
    	"karma-sauce-launcher": "^1.2.0",
    	"karma-sinon": "^1.0.5",
    	"karma-sourcemap-loader": "^0.3.7",
    	"karma-webpack": "^1.7.0",
    	"load-grunt-tasks": "^3.5.2",
    	minimist: "^1.2.0",
    	mocha: "^5.2.0",
    	sinon: "^4.5.0",
    	typescript: "^2.8.1",
    	"url-search-params": "^0.10.0",
    	webpack: "^1.13.1",
    	"webpack-dev-server": "^1.14.1"
    };
    var browser = {
    	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
    };
    var jsdelivr = "dist/axios.min.js";
    var unpkg = "dist/axios.min.js";
    var typings = "./index.d.ts";
    var dependencies = {
    	"follow-redirects": "^1.10.0"
    };
    var bundlesize = [
    	{
    		path: "./dist/axios.min.js",
    		threshold: "5kB"
    	}
    ];
    var require$$9 = {
    	name: name,
    	version: version,
    	description: description,
    	main: main,
    	scripts: scripts,
    	repository: repository,
    	keywords: keywords,
    	author: author,
    	license: license,
    	bugs: bugs,
    	homepage: homepage,
    	devDependencies: devDependencies,
    	browser: browser,
    	jsdelivr: jsdelivr,
    	unpkg: unpkg,
    	typings: typings,
    	dependencies: dependencies,
    	bundlesize: bundlesize
    };

    var utils$8 = utils$h;
    var settle = settle$2;
    var buildFullPath = buildFullPath$2;
    var buildURL$1 = buildURL$3;
    var http = require$$1__default['default'];
    var https = require$$2__default['default'];
    var httpFollow = followRedirects.exports.http;
    var httpsFollow = followRedirects.exports.https;
    var url = require$$0__default$1['default'];
    var zlib = require$$8__default['default'];
    var pkg = require$$9;
    var createError = createError$3;
    var enhanceError = enhanceError$2;

    var isHttps = /https:?/;

    /*eslint consistent-return:0*/
    var http_1 = function httpAdapter(config) {
      return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var resolve = function resolve(value) {
          resolvePromise(value);
        };
        var reject = function reject(value) {
          rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;

        // Set User-Agent (required by some servers)
        // Only set header if it hasn't been set in config
        // See https://github.com/axios/axios/issues/69
        if (!headers['User-Agent'] && !headers['user-agent']) {
          headers['User-Agent'] = 'axios/' + pkg.version;
        }

        if (data && !utils$8.isStream(data)) {
          if (Buffer.isBuffer(data)) ; else if (utils$8.isArrayBuffer(data)) {
            data = Buffer.from(new Uint8Array(data));
          } else if (utils$8.isString(data)) {
            data = Buffer.from(data, 'utf-8');
          } else {
            return reject(createError(
              'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
              config
            ));
          }

          // Add Content-Length header if data exists
          headers['Content-Length'] = data.length;
        }

        // HTTP basic authentication
        var auth = undefined;
        if (config.auth) {
          var username = config.auth.username || '';
          var password = config.auth.password || '';
          auth = username + ':' + password;
        }

        // Parse url
        var fullPath = buildFullPath(config.baseURL, config.url);
        var parsed = url.parse(fullPath);
        var protocol = parsed.protocol || 'http:';

        if (!auth && parsed.auth) {
          var urlAuth = parsed.auth.split(':');
          var urlUsername = urlAuth[0] || '';
          var urlPassword = urlAuth[1] || '';
          auth = urlUsername + ':' + urlPassword;
        }

        if (auth) {
          delete headers.Authorization;
        }

        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

        var options = {
          path: buildURL$1(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
          method: config.method.toUpperCase(),
          headers: headers,
          agent: agent,
          agents: { http: config.httpAgent, https: config.httpsAgent },
          auth: auth
        };

        if (config.socketPath) {
          options.socketPath = config.socketPath;
        } else {
          options.hostname = parsed.hostname;
          options.port = parsed.port;
        }

        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
          var proxyEnv = protocol.slice(0, -1) + '_proxy';
          var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
          if (proxyUrl) {
            var parsedProxyUrl = url.parse(proxyUrl);
            var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
            var shouldProxy = true;

            if (noProxyEnv) {
              var noProxy = noProxyEnv.split(',').map(function trim(s) {
                return s.trim();
              });

              shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                if (!proxyElement) {
                  return false;
                }
                if (proxyElement === '*') {
                  return true;
                }
                if (proxyElement[0] === '.' &&
                    parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                  return true;
                }

                return parsed.hostname === proxyElement;
              });
            }


            if (shouldProxy) {
              proxy = {
                host: parsedProxyUrl.hostname,
                port: parsedProxyUrl.port
              };

              if (parsedProxyUrl.auth) {
                var proxyUrlAuth = parsedProxyUrl.auth.split(':');
                proxy.auth = {
                  username: proxyUrlAuth[0],
                  password: proxyUrlAuth[1]
                };
              }
            }
          }
        }

        if (proxy) {
          options.hostname = proxy.host;
          options.host = proxy.host;
          options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
          options.port = proxy.port;
          options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

          // Basic proxy authorization
          if (proxy.auth) {
            var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
            options.headers['Proxy-Authorization'] = 'Basic ' + base64;
          }
        }

        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport) {
          transport = config.transport;
        } else if (config.maxRedirects === 0) {
          transport = isHttpsProxy ? https : http;
        } else {
          if (config.maxRedirects) {
            options.maxRedirects = config.maxRedirects;
          }
          transport = isHttpsProxy ? httpsFollow : httpFollow;
        }

        if (config.maxBodyLength > -1) {
          options.maxBodyLength = config.maxBodyLength;
        }

        // Create the request
        var req = transport.request(options, function handleResponse(res) {
          if (req.aborted) return;

          // uncompress the response body transparently if required
          var stream = res;

          // return the last request in case of redirects
          var lastRequest = res.req || req;


          // if no content, is HEAD request or decompress disabled we should not decompress
          if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
            switch (res.headers['content-encoding']) {
            /*eslint default-case:0*/
            case 'gzip':
            case 'compress':
            case 'deflate':
            // add the unzipper to the body stream processing pipeline
              stream = stream.pipe(zlib.createUnzip());

              // remove the content-encoding in order to not confuse downstream operations
              delete res.headers['content-encoding'];
              break;
            }
          }

          var response = {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers,
            config: config,
            request: lastRequest
          };

          if (config.responseType === 'stream') {
            response.data = stream;
            settle(resolve, reject, response);
          } else {
            var responseBuffer = [];
            stream.on('data', function handleStreamData(chunk) {
              responseBuffer.push(chunk);

              // make sure the content length is not over the maxContentLength if specified
              if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
                stream.destroy();
                reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                  config, null, lastRequest));
              }
            });

            stream.on('error', function handleStreamError(err) {
              if (req.aborted) return;
              reject(enhanceError(err, config, null, lastRequest));
            });

            stream.on('end', function handleStreamEnd() {
              var responseData = Buffer.concat(responseBuffer);
              if (config.responseType !== 'arraybuffer') {
                responseData = responseData.toString(config.responseEncoding);
                if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                  responseData = utils$8.stripBOM(responseData);
                }
              }

              response.data = responseData;
              settle(resolve, reject, response);
            });
          }
        });

        // Handle errors
        req.on('error', function handleRequestError(err) {
          if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
          reject(enhanceError(err, config, null, req));
        });

        // Handle request timeout
        if (config.timeout) {
          // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
          // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
          // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
          // And then these socket which be hang up will devoring CPU little by little.
          // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
          req.setTimeout(config.timeout, function handleRequestTimeout() {
            req.abort();
            reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
          });
        }

        if (config.cancelToken) {
          // Handle cancellation
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (req.aborted) return;

            req.abort();
            reject(cancel);
          });
        }

        // Send the request
        if (utils$8.isStream(data)) {
          data.on('error', function handleStreamError(err) {
            reject(enhanceError(err, config, null, req));
          }).pipe(req);
        } else {
          req.end(data);
        }
      });
    };

    var utils$7 = utils$h;
    var normalizeHeaderName = normalizeHeaderName$1;

    var DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    function setContentTypeIfUnset(headers, value) {
      if (!utils$7.isUndefined(headers) && utils$7.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
      }
    }

    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = xhr;
      } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = http_1;
      }
      return adapter;
    }

    var defaults$4 = {
      adapter: getDefaultAdapter(),

      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');
        if (utils$7.isFormData(data) ||
          utils$7.isArrayBuffer(data) ||
          utils$7.isBuffer(data) ||
          utils$7.isStream(data) ||
          utils$7.isFile(data) ||
          utils$7.isBlob(data)
        ) {
          return data;
        }
        if (utils$7.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils$7.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return data.toString();
        }
        if (utils$7.isObject(data)) {
          setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
          return JSON.stringify(data);
        }
        return data;
      }],

      transformResponse: [function transformResponse(data) {
        /*eslint no-param-reassign:0*/
        if (typeof data === 'string') {
          try {
            data = JSON.parse(data);
          } catch (e) { /* Ignore */ }
        }
        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,
      maxBodyLength: -1,

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };

    defaults$4.headers = {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    };

    utils$7.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults$4.headers[method] = {};
    });

    utils$7.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults$4.headers[method] = utils$7.merge(DEFAULT_CONTENT_TYPE);
    });

    var defaults_1 = defaults$4;

    var utils$6 = utils$h;
    var transformData = transformData$1;
    var isCancel = isCancel$1;
    var defaults$3 = defaults_1;

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
    var dispatchRequest$1 = function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      // Ensure headers exist
      config.headers = config.headers || {};

      // Transform request data
      config.data = transformData(
        config.data,
        config.headers,
        config.transformRequest
      );

      // Flatten headers
      config.headers = utils$6.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );

      utils$6.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );

      var adapter = config.adapter || defaults$3.adapter;

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData(
          response.data,
          response.headers,
          config.transformResponse
        );

        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData(
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      });
    };

    var utils$5 = utils$h;

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     * @returns {Object} New object resulting from merging config2 to config1
     */
    var mergeConfig$2 = function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      var config = {};

      var valueFromConfig2Keys = ['url', 'method', 'data'];
      var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
      var defaultToConfig2Keys = [
        'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
        'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
        'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
      ];
      var directMergeKeys = ['validateStatus'];

      function getMergedValue(target, source) {
        if (utils$5.isPlainObject(target) && utils$5.isPlainObject(source)) {
          return utils$5.merge(target, source);
        } else if (utils$5.isPlainObject(source)) {
          return utils$5.merge({}, source);
        } else if (utils$5.isArray(source)) {
          return source.slice();
        }
        return source;
      }

      function mergeDeepProperties(prop) {
        if (!utils$5.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils$5.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      }

      utils$5.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils$5.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(undefined, config2[prop]);
        }
      });

      utils$5.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

      utils$5.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils$5.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(undefined, config2[prop]);
        } else if (!utils$5.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      });

      utils$5.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(undefined, config1[prop]);
        }
      });

      var axiosKeys = valueFromConfig2Keys
        .concat(mergeDeepPropertiesKeys)
        .concat(defaultToConfig2Keys)
        .concat(directMergeKeys);

      var otherKeys = Object
        .keys(config1)
        .concat(Object.keys(config2))
        .filter(function filterAxiosKeys(key) {
          return axiosKeys.indexOf(key) === -1;
        });

      utils$5.forEach(otherKeys, mergeDeepProperties);

      return config;
    };

    var utils$4 = utils$h;
    var buildURL = buildURL$3;
    var InterceptorManager = InterceptorManager_1;
    var dispatchRequest = dispatchRequest$1;
    var mergeConfig$1 = mergeConfig$2;

    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     */
    function Axios$1(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
    Axios$1.prototype.request = function request(config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }

      config = mergeConfig$1(this.defaults, config);

      // Set config.method
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = 'get';
      }

      // Hook up interceptors middleware
      var chain = [dispatchRequest, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    };

    Axios$1.prototype.getUri = function getUri(config) {
      config = mergeConfig$1(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };

    // Provide aliases for supported request methods
    utils$4.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios$1.prototype[method] = function(url, config) {
        return this.request(mergeConfig$1(config || {}, {
          method: method,
          url: url,
          data: (config || {}).data
        }));
      };
    });

    utils$4.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/
      Axios$1.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig$1(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });

    var Axios_1 = Axios$1;

    /**
     * A `Cancel` is an object that is thrown when an operation is canceled.
     *
     * @class
     * @param {string=} message The message.
     */
    function Cancel$1(message) {
      this.message = message;
    }

    Cancel$1.prototype.toString = function toString() {
      return 'Cancel' + (this.message ? ': ' + this.message : '');
    };

    Cancel$1.prototype.__CANCEL__ = true;

    var Cancel_1 = Cancel$1;

    var Cancel = Cancel_1;

    /**
     * A `CancelToken` is an object that can be used to request cancellation of an operation.
     *
     * @class
     * @param {Function} executor The executor function.
     */
    function CancelToken(executor) {
      if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
      }

      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });

      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          // Cancellation has already been requested
          return;
        }

        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    };

    var CancelToken_1 = CancelToken;

    /**
     * Syntactic sugar for invoking a function and expanding an array for arguments.
     *
     * Common use case would be to use `Function.prototype.apply`.
     *
     *  ```js
     *  function f(x, y, z) {}
     *  var args = [1, 2, 3];
     *  f.apply(null, args);
     *  ```
     *
     * With `spread` this example can be re-written.
     *
     *  ```js
     *  spread(function(x, y, z) {})([1, 2, 3]);
     *  ```
     *
     * @param {Function} callback
     * @returns {Function}
     */
    var spread = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };

    var utils$3 = utils$h;
    var bind = bind$2;
    var Axios = Axios_1;
    var mergeConfig = mergeConfig$2;
    var defaults$2 = defaults_1;

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);

      // Copy axios.prototype to instance
      utils$3.extend(instance, Axios.prototype, context);

      // Copy context to instance
      utils$3.extend(instance, context);

      return instance;
    }

    // Create the default instance to be exported
    var axios$1 = createInstance(defaults$2);

    // Expose Axios class to allow class inheritance
    axios$1.Axios = Axios;

    // Factory for creating new instances
    axios$1.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
    };

    // Expose Cancel & CancelToken
    axios$1.Cancel = Cancel_1;
    axios$1.CancelToken = CancelToken_1;
    axios$1.isCancel = isCancel$1;

    // Expose all/spread
    axios$1.all = function all(promises) {
      return Promise.all(promises);
    };
    axios$1.spread = spread;

    axios$2.exports = axios$1;

    // Allow use of default import syntax in TypeScript
    axios$2.exports.default = axios$1;

    var axios = axios$2.exports;

    var has$2 = Object.prototype.hasOwnProperty;
    var isArray$2 = Array.isArray;

    var hexTable = (function () {
        var array = [];
        for (var i = 0; i < 256; ++i) {
            array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
        }

        return array;
    }());

    var compactQueue = function compactQueue(queue) {
        while (queue.length > 1) {
            var item = queue.pop();
            var obj = item.obj[item.prop];

            if (isArray$2(obj)) {
                var compacted = [];

                for (var j = 0; j < obj.length; ++j) {
                    if (typeof obj[j] !== 'undefined') {
                        compacted.push(obj[j]);
                    }
                }

                item.obj[item.prop] = compacted;
            }
        }
    };

    var arrayToObject = function arrayToObject(source, options) {
        var obj = options && options.plainObjects ? Object.create(null) : {};
        for (var i = 0; i < source.length; ++i) {
            if (typeof source[i] !== 'undefined') {
                obj[i] = source[i];
            }
        }

        return obj;
    };

    var merge = function merge(target, source, options) {
        /* eslint no-param-reassign: 0 */
        if (!source) {
            return target;
        }

        if (typeof source !== 'object') {
            if (isArray$2(target)) {
                target.push(source);
            } else if (target && typeof target === 'object') {
                if ((options && (options.plainObjects || options.allowPrototypes)) || !has$2.call(Object.prototype, source)) {
                    target[source] = true;
                }
            } else {
                return [target, source];
            }

            return target;
        }

        if (!target || typeof target !== 'object') {
            return [target].concat(source);
        }

        var mergeTarget = target;
        if (isArray$2(target) && !isArray$2(source)) {
            mergeTarget = arrayToObject(target, options);
        }

        if (isArray$2(target) && isArray$2(source)) {
            source.forEach(function (item, i) {
                if (has$2.call(target, i)) {
                    var targetItem = target[i];
                    if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                        target[i] = merge(targetItem, item, options);
                    } else {
                        target.push(item);
                    }
                } else {
                    target[i] = item;
                }
            });
            return target;
        }

        return Object.keys(source).reduce(function (acc, key) {
            var value = source[key];

            if (has$2.call(acc, key)) {
                acc[key] = merge(acc[key], value, options);
            } else {
                acc[key] = value;
            }
            return acc;
        }, mergeTarget);
    };

    var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function (acc, key) {
            acc[key] = source[key];
            return acc;
        }, target);
    };

    var decode = function (str, decoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, ' ');
        if (charset === 'iso-8859-1') {
            // unescape never throws, no try...catch needed:
            return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        // utf-8
        try {
            return decodeURIComponent(strWithoutPlus);
        } catch (e) {
            return strWithoutPlus;
        }
    };

    var encode = function encode(str, defaultEncoder, charset) {
        // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
        // It has been adapted here for stricter adherence to RFC 3986
        if (str.length === 0) {
            return str;
        }

        var string = str;
        if (typeof str === 'symbol') {
            string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== 'string') {
            string = String(str);
        }

        if (charset === 'iso-8859-1') {
            return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
                return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
            });
        }

        var out = '';
        for (var i = 0; i < string.length; ++i) {
            var c = string.charCodeAt(i);

            if (
                c === 0x2D // -
                || c === 0x2E // .
                || c === 0x5F // _
                || c === 0x7E // ~
                || (c >= 0x30 && c <= 0x39) // 0-9
                || (c >= 0x41 && c <= 0x5A) // a-z
                || (c >= 0x61 && c <= 0x7A) // A-Z
            ) {
                out += string.charAt(i);
                continue;
            }

            if (c < 0x80) {
                out = out + hexTable[c];
                continue;
            }

            if (c < 0x800) {
                out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
                continue;
            }

            if (c < 0xD800 || c >= 0xE000) {
                out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
                continue;
            }

            i += 1;
            c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
            out += hexTable[0xF0 | (c >> 18)]
                + hexTable[0x80 | ((c >> 12) & 0x3F)]
                + hexTable[0x80 | ((c >> 6) & 0x3F)]
                + hexTable[0x80 | (c & 0x3F)];
        }

        return out;
    };

    var compact = function compact(value) {
        var queue = [{ obj: { o: value }, prop: 'o' }];
        var refs = [];

        for (var i = 0; i < queue.length; ++i) {
            var item = queue[i];
            var obj = item.obj[item.prop];

            var keys = Object.keys(obj);
            for (var j = 0; j < keys.length; ++j) {
                var key = keys[j];
                var val = obj[key];
                if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                    queue.push({ obj: obj, prop: key });
                    refs.push(val);
                }
            }
        }

        compactQueue(queue);

        return value;
    };

    var isRegExp = function isRegExp(obj) {
        return Object.prototype.toString.call(obj) === '[object RegExp]';
    };

    var isBuffer = function isBuffer(obj) {
        if (!obj || typeof obj !== 'object') {
            return false;
        }

        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };

    var combine = function combine(a, b) {
        return [].concat(a, b);
    };

    var maybeMap = function maybeMap(val, fn) {
        if (isArray$2(val)) {
            var mapped = [];
            for (var i = 0; i < val.length; i += 1) {
                mapped.push(fn(val[i]));
            }
            return mapped;
        }
        return fn(val);
    };

    var utils$2 = {
        arrayToObject: arrayToObject,
        assign: assign,
        combine: combine,
        compact: compact,
        decode: decode,
        encode: encode,
        isBuffer: isBuffer,
        isRegExp: isRegExp,
        maybeMap: maybeMap,
        merge: merge
    };

    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;

    var util = utils$2;

    var Format = {
        RFC1738: 'RFC1738',
        RFC3986: 'RFC3986'
    };

    var formats$2 = util.assign(
        {
            'default': Format.RFC3986,
            formatters: {
                RFC1738: function (value) {
                    return replace.call(value, percentTwenties, '+');
                },
                RFC3986: function (value) {
                    return String(value);
                }
            }
        },
        Format
    );

    var utils$1 = utils$2;
    var formats$1 = formats$2;
    var has$1 = Object.prototype.hasOwnProperty;

    var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
            return prefix + '[]';
        },
        comma: 'comma',
        indices: function indices(prefix, key) {
            return prefix + '[' + key + ']';
        },
        repeat: function repeat(prefix) {
            return prefix;
        }
    };

    var isArray$1 = Array.isArray;
    var push$1 = Array.prototype.push;
    var pushToArray = function (arr, valueOrArray) {
        push$1.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
    };

    var toISO = Date.prototype.toISOString;

    var defaultFormat = formats$1['default'];
    var defaults$1 = {
        addQueryPrefix: false,
        allowDots: false,
        charset: 'utf-8',
        charsetSentinel: false,
        delimiter: '&',
        encode: true,
        encoder: utils$1.encode,
        encodeValuesOnly: false,
        format: defaultFormat,
        formatter: formats$1.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date) {
            return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
    };

    var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
        return typeof v === 'string'
            || typeof v === 'number'
            || typeof v === 'boolean'
            || typeof v === 'symbol'
            || typeof v === 'bigint';
    };

    var stringify$1 = function stringify(
        object,
        prefix,
        generateArrayPrefix,
        strictNullHandling,
        skipNulls,
        encoder,
        filter,
        sort,
        allowDots,
        serializeDate,
        formatter,
        encodeValuesOnly,
        charset
    ) {
        var obj = object;
        if (typeof filter === 'function') {
            obj = filter(prefix, obj);
        } else if (obj instanceof Date) {
            obj = serializeDate(obj);
        } else if (generateArrayPrefix === 'comma' && isArray$1(obj)) {
            obj = utils$1.maybeMap(obj, function (value) {
                if (value instanceof Date) {
                    return serializeDate(value);
                }
                return value;
            }).join(',');
        }

        if (obj === null) {
            if (strictNullHandling) {
                return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, 'key') : prefix;
            }

            obj = '';
        }

        if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
            if (encoder) {
                var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, 'key');
                return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults$1.encoder, charset, 'value'))];
            }
            return [formatter(prefix) + '=' + formatter(String(obj))];
        }

        var values = [];

        if (typeof obj === 'undefined') {
            return values;
        }

        var objKeys;
        if (isArray$1(filter)) {
            objKeys = filter;
        } else {
            var keys = Object.keys(obj);
            objKeys = sort ? keys.sort(sort) : keys;
        }

        for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];
            var value = obj[key];

            if (skipNulls && value === null) {
                continue;
            }

            var keyPrefix = isArray$1(obj)
                ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
                : prefix + (allowDots ? '.' + key : '[' + key + ']');

            pushToArray(values, stringify(
                value,
                keyPrefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }

        return values;
    };

    var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
        if (!opts) {
            return defaults$1;
        }

        if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
            throw new TypeError('Encoder has to be a function.');
        }

        var charset = opts.charset || defaults$1.charset;
        if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
            throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        }

        var format = formats$1['default'];
        if (typeof opts.format !== 'undefined') {
            if (!has$1.call(formats$1.formatters, opts.format)) {
                throw new TypeError('Unknown format option provided.');
            }
            format = opts.format;
        }
        var formatter = formats$1.formatters[format];

        var filter = defaults$1.filter;
        if (typeof opts.filter === 'function' || isArray$1(opts.filter)) {
            filter = opts.filter;
        }

        return {
            addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
            allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
            charset: charset,
            charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
            delimiter: typeof opts.delimiter === 'undefined' ? defaults$1.delimiter : opts.delimiter,
            encode: typeof opts.encode === 'boolean' ? opts.encode : defaults$1.encode,
            encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults$1.encoder,
            encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
            filter: filter,
            formatter: formatter,
            serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults$1.serializeDate,
            skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults$1.skipNulls,
            sort: typeof opts.sort === 'function' ? opts.sort : null,
            strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
        };
    };

    var stringify_1 = function (object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);

        var objKeys;
        var filter;

        if (typeof options.filter === 'function') {
            filter = options.filter;
            obj = filter('', obj);
        } else if (isArray$1(options.filter)) {
            filter = options.filter;
            objKeys = filter;
        }

        var keys = [];

        if (typeof obj !== 'object' || obj === null) {
            return '';
        }

        var arrayFormat;
        if (opts && opts.arrayFormat in arrayPrefixGenerators) {
            arrayFormat = opts.arrayFormat;
        } else if (opts && 'indices' in opts) {
            arrayFormat = opts.indices ? 'indices' : 'repeat';
        } else {
            arrayFormat = 'indices';
        }

        var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

        if (!objKeys) {
            objKeys = Object.keys(obj);
        }

        if (options.sort) {
            objKeys.sort(options.sort);
        }

        for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];

            if (options.skipNulls && obj[key] === null) {
                continue;
            }
            pushToArray(keys, stringify$1(
                obj[key],
                key,
                generateArrayPrefix,
                options.strictNullHandling,
                options.skipNulls,
                options.encode ? options.encoder : null,
                options.filter,
                options.sort,
                options.allowDots,
                options.serializeDate,
                options.formatter,
                options.encodeValuesOnly,
                options.charset
            ));
        }

        var joined = keys.join(options.delimiter);
        var prefix = options.addQueryPrefix === true ? '?' : '';

        if (options.charsetSentinel) {
            if (options.charset === 'iso-8859-1') {
                // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
                prefix += 'utf8=%26%2310003%3B&';
            } else {
                // encodeURIComponent('✓')
                prefix += 'utf8=%E2%9C%93&';
            }
        }

        return joined.length > 0 ? prefix + joined : '';
    };

    var utils = utils$2;

    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;

    var defaults = {
        allowDots: false,
        allowPrototypes: false,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: false,
        comma: false,
        decoder: utils.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1000,
        parseArrays: true,
        plainObjects: false,
        strictNullHandling: false
    };

    var interpretNumericEntities = function (str) {
        return str.replace(/&#(\d+);/g, function ($0, numberStr) {
            return String.fromCharCode(parseInt(numberStr, 10));
        });
    };

    var parseArrayValue = function (val, options) {
        if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
            return val.split(',');
        }

        return val;
    };

    // This is what browsers will submit when the ✓ character occurs in an
    // application/x-www-form-urlencoded body and the encoding of the page containing
    // the form is iso-8859-1, or when the submitted form has an accept-charset
    // attribute of iso-8859-1. Presumably also with other charsets that do not contain
    // the ✓ character, such as us-ascii.
    var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

    // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
    var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

    var parseValues = function parseQueryStringValues(str, options) {
        var obj = {};
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
        var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
        var parts = cleanStr.split(options.delimiter, limit);
        var skipIndex = -1; // Keep track of where the utf8 sentinel was found
        var i;

        var charset = options.charset;
        if (options.charsetSentinel) {
            for (i = 0; i < parts.length; ++i) {
                if (parts[i].indexOf('utf8=') === 0) {
                    if (parts[i] === charsetSentinel) {
                        charset = 'utf-8';
                    } else if (parts[i] === isoSentinel) {
                        charset = 'iso-8859-1';
                    }
                    skipIndex = i;
                    i = parts.length; // The eslint settings do not allow break;
                }
            }
        }

        for (i = 0; i < parts.length; ++i) {
            if (i === skipIndex) {
                continue;
            }
            var part = parts[i];

            var bracketEqualsPos = part.indexOf(']=');
            var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

            var key, val;
            if (pos === -1) {
                key = options.decoder(part, defaults.decoder, charset, 'key');
                val = options.strictNullHandling ? null : '';
            } else {
                key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
                val = utils.maybeMap(
                    parseArrayValue(part.slice(pos + 1), options),
                    function (encodedVal) {
                        return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                    }
                );
            }

            if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
                val = interpretNumericEntities(val);
            }

            if (part.indexOf('[]=') > -1) {
                val = isArray(val) ? [val] : val;
            }

            if (has.call(obj, key)) {
                obj[key] = utils.combine(obj[key], val);
            } else {
                obj[key] = val;
            }
        }

        return obj;
    };

    var parseObject = function (chain, val, options, valuesParsed) {
        var leaf = valuesParsed ? val : parseArrayValue(val, options);

        for (var i = chain.length - 1; i >= 0; --i) {
            var obj;
            var root = chain[i];

            if (root === '[]' && options.parseArrays) {
                obj = [].concat(leaf);
            } else {
                obj = options.plainObjects ? Object.create(null) : {};
                var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
                var index = parseInt(cleanRoot, 10);
                if (!options.parseArrays && cleanRoot === '') {
                    obj = { 0: leaf };
                } else if (
                    !isNaN(index)
                    && root !== cleanRoot
                    && String(index) === cleanRoot
                    && index >= 0
                    && (options.parseArrays && index <= options.arrayLimit)
                ) {
                    obj = [];
                    obj[index] = leaf;
                } else {
                    obj[cleanRoot] = leaf;
                }
            }

            leaf = obj; // eslint-disable-line no-param-reassign
        }

        return leaf;
    };

    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
            return;
        }

        // Transform dot notation to bracket notation
        var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

        // The regex chunks

        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;

        // Get the parent

        var segment = options.depth > 0 && brackets.exec(key);
        var parent = segment ? key.slice(0, segment.index) : key;

        // Stash the parent if it exists

        var keys = [];
        if (parent) {
            // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
            if (!options.plainObjects && has.call(Object.prototype, parent)) {
                if (!options.allowPrototypes) {
                    return;
                }
            }

            keys.push(parent);
        }

        // Loop through children appending to the array until we hit depth

        var i = 0;
        while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
            i += 1;
            if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
                if (!options.allowPrototypes) {
                    return;
                }
            }
            keys.push(segment[1]);
        }

        // If there's a remainder, just add whatever is left

        if (segment) {
            keys.push('[' + key.slice(segment.index) + ']');
        }

        return parseObject(keys, val, options, valuesParsed);
    };

    var normalizeParseOptions = function normalizeParseOptions(opts) {
        if (!opts) {
            return defaults;
        }

        if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
            throw new TypeError('Decoder has to be a function.');
        }

        if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
            throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        }
        var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

        return {
            allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
            allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
            arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
            charset: charset,
            charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
            comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
            decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
            delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
            // eslint-disable-next-line no-implicit-coercion, no-extra-parens
            depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
            ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
            interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
            parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
            parseArrays: opts.parseArrays !== false,
            plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
            strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
        };
    };

    var parse$7 = function (str, opts) {
        var options = normalizeParseOptions(opts);

        if (str === '' || str === null || typeof str === 'undefined') {
            return options.plainObjects ? Object.create(null) : {};
        }

        var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
        var obj = options.plainObjects ? Object.create(null) : {};

        // Iterate over the keys and setup the new object

        var keys = Object.keys(tempObj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
            obj = utils.merge(obj, newObj, options);
        }

        return utils.compact(obj);
    };

    var stringify = stringify_1;
    var parse$6 = parse$7;
    var formats = formats$2;

    var lib = {
        formats: formats,
        parse: parse$6,
        stringify: stringify
    };

    class AuthApi {
        constructor(_axios) {
            this._axios = _axios;
        }
        editorSignin(account, password) {
            return this._axios.post("/account/editor_signin", {
                account,
                password,
            });
        }
        refreshToken(token, refreshToken) {
            return this._axios.post("/account/refresh_token", {
                token,
                refreshToken,
            });
        }
    }

    var ComponentVisibility;
    (function (ComponentVisibility) {
        ComponentVisibility["PUBLIC"] = "Public";
        ComponentVisibility["PRIVATE"] = "Private";
    })(ComponentVisibility || (ComponentVisibility = {}));
    var ComponentType;
    (function (ComponentType) {
        ComponentType["All"] = "";
        ComponentType["Element"] = "ElementNode";
        ComponentType["Terrain"] = "TerrainNode";
        ComponentType["CustomNode"] = "CustomNode";
        ComponentType["Effect"] = "EffectNode";
    })(ComponentType || (ComponentType = {}));
    class ComponentApi {
        constructor(_axios) {
            this._axios = _axios;
        }
        listMarketComponents(pagination = { page: 1, pageSize: 20 }, query = {
            keyword: "",
            tags: [],
        }) {
            const q = Object.assign(pagination, query, {
                type: `-${ComponentType.CustomNode}`,
                visibility: ComponentVisibility.PUBLIC,
            });
            return this._axios.get(`/component/list?${lib.stringify(q)}`);
        }
        listMyComponents(pagination = { page: 1, pageSize: 20 }, query = {
            keyword: "",
            tags: [],
        }) {
            const q = Object.assign(pagination, query, {
                type: `-${ComponentType.CustomNode}`,
                visibility: ComponentVisibility.PRIVATE,
            });
            return this._axios.get(`/component/mine?${lib.stringify(q)}`);
        }
        listMarketCustomNodes(pagination = { page: 1, pageSize: 20 }, query = {
            keyword: "",
            tags: [],
        }) {
            const q = Object.assign(pagination, query, {
                type: ComponentType.CustomNode,
                visibility: ComponentVisibility.PUBLIC,
            });
            return this._axios.get(`/component/list?${lib.stringify(q)}`);
        }
        listMyCustomNodes(pagination = { page: 1, pageSize: 20 }, query = {
            keyword: "",
            tags: [],
        }) {
            const q = Object.assign(pagination, query, {
                type: ComponentType.CustomNode,
                visibility: ComponentVisibility.PRIVATE,
            });
            return this._axios.get(`/component/mine?${lib.stringify(q)}`);
        }
    }

    class GameApi {
        constructor(_axios) {
            this._axios = _axios;
        }
        listTemplateGames() {
            return this._axios.get("/game/list?template=true");
        }
        listMyGames(pagination = { page: 1, pageSize: 20 }) {
            const q = lib.stringify(pagination);
            return this._axios.get(`/game/mine?${q}`);
        }
    }

    class PluginApi {
        constructor(_axios) {
            this._axios = _axios;
        }
        createPlugin(data) {
            return this._axios.post("/plugin/create", data);
        }
        updatePlugin(pluginId, updateDto) {
            return this._axios.put(`/plugin/update/${pluginId}`, updateDto);
        }
        listPlugins() {
            return this._axios.get(`/plugin/list`);
        }
        getPlugin(pluginName) {
            return this._axios.get(`/plugin/list?name=${pluginName}`);
        }
    }

    class UtilApi {
        constructor(_axios) {
            this._axios = _axios;
        }
        getQiniuToken(data) {
            return this._axios.post("/qiniu_token", data);
        }
    }

    var Environment;
    (function (Environment) {
        Environment["Develop"] = "develop";
        Environment["Release"] = "release";
        Environment["Production"] = "production";
    })(Environment || (Environment = {}));
    const Config = {
        [Environment.Develop]: "http://172.18.0.100:17180",
        [Environment.Release]: "https://api-dev.tooqing.com",
        [Environment.Production]: "https://api.tooqing.com",
    };
    class QingWebApiSdk {
        constructor(env = Environment.Release) {
            this.env = env;
            this._baseUrl = Config[env];
            this._axios = axios.create({
                baseURL: this._baseUrl,
            });
            this._auth = new AuthApi(this._axios);
            this._game = new GameApi(this._axios);
            this._component = new ComponentApi(this._axios);
            this._plugin = new PluginApi(this._axios);
            this._util = new UtilApi(this._axios);
        }
        static getInstance() {
            if (!QingWebApiSdk.instance) {
                QingWebApiSdk.instance = new QingWebApiSdk();
            }
            return QingWebApiSdk.instance;
        }
        get auth() {
            return this._auth;
        }
        get game() {
            return this._game;
        }
        get component() {
            return this._component;
        }
        get plugin() {
            return this._plugin;
        }
        get util() {
            return this._util;
        }
        setToken(token) {
            this._axios.defaults.headers.common["X-Pixelpai-TK"] = token;
        }
        setRequestInterceptor(onFulfilled, onRejected) {
            this._axios.interceptors.request.use(onFulfilled, onRejected);
        }
        setResponseInterceptor(onFulfilled, onRejected) {
            this._axios.interceptors.response.use(onFulfilled, onRejected);
        }
        req(request) {
            this._axios(request);
        }
    }

    var re$5 = {exports: {}};

    // Note: this is the semver.org version of the spec that it implements
    // Not necessarily the package version of this code.
    const SEMVER_SPEC_VERSION = '2.0.0';

    const MAX_LENGTH$2 = 256;
    const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER ||
      /* istanbul ignore next */ 9007199254740991;

    // Max safe segment length for coercion.
    const MAX_SAFE_COMPONENT_LENGTH = 16;

    var constants = {
      SEMVER_SPEC_VERSION,
      MAX_LENGTH: MAX_LENGTH$2,
      MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
      MAX_SAFE_COMPONENT_LENGTH
    };

    const debug$3 = (
      typeof process === 'object' &&
      process.env &&
      process.env.NODE_DEBUG &&
      /\bsemver\b/i.test(process.env.NODE_DEBUG)
    ) ? (...args) => console.error('SEMVER', ...args)
      : () => {};

    var debug_1 = debug$3;

    (function (module, exports) {
    const { MAX_SAFE_COMPONENT_LENGTH } = constants;
    const debug = debug_1;
    exports = module.exports = {};

    // The actual regexps go on exports.re
    const re = exports.re = [];
    const src = exports.src = [];
    const t = exports.t = {};
    let R = 0;

    const createToken = (name, value, isGlobal) => {
      const index = R++;
      debug(index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    };

    // The following Regular Expressions can be used for tokenizing,
    // validating, and parsing SemVer version strings.

    // ## Numeric Identifier
    // A single `0`, or a non-zero digit followed by zero or more digits.

    createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
    createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+');

    // ## Non-numeric Identifier
    // Zero or more digits, followed by a letter or hyphen, and then zero or
    // more letters, digits, or hyphens.

    createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*');

    // ## Main Version
    // Three dot-separated numeric identifiers.

    createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                       `(${src[t.NUMERICIDENTIFIER]})\\.` +
                       `(${src[t.NUMERICIDENTIFIER]})`);

    createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                            `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                            `(${src[t.NUMERICIDENTIFIERLOOSE]})`);

    // ## Pre-release Version Identifier
    // A numeric identifier, or a non-numeric identifier.

    createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`);

    createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`);

    // ## Pre-release Version
    // Hyphen, followed by one or more dot-separated pre-release version
    // identifiers.

    createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);

    createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);

    // ## Build Metadata Identifier
    // Any combination of digits, letters, or hyphens.

    createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+');

    // ## Build Metadata
    // Plus sign, followed by one or more period-separated build metadata
    // identifiers.

    createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);

    // ## Full Version String
    // A main version, followed optionally by a pre-release version and
    // build metadata.

    // Note that the only major, minor, patch, and pre-release sections of
    // the version string are capturing groups.  The build metadata is not a
    // capturing group, because it should not ever be used in version
    // comparison.

    createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`);

    createToken('FULL', `^${src[t.FULLPLAIN]}$`);

    // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
    // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
    // common in the npm registry.
    createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`);

    createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);

    createToken('GTLT', '((?:<|>)?=?)');

    // Something like "2.*" or "1.2.x".
    // Note that "x.x" is a valid xRange identifer, meaning "any version"
    // Only the first item is strictly required.
    createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);

    createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                       `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                       `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                       `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                       `)?)?`);

    createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                            `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                            `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                            `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                            `)?)?`);

    createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);

    // Coercion.
    // Extract anything that could conceivably be a part of a valid semver
    createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
                  `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
                  `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
                  `(?:$|[^\\d])`);
    createToken('COERCERTL', src[t.COERCE], true);

    // Tilde ranges.
    // Meaning is "reasonably at or greater than"
    createToken('LONETILDE', '(?:~>?)');

    createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = '$1~';

    createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);

    // Caret ranges.
    // Meaning is "at least and backwards compatible with"
    createToken('LONECARET', '(?:\\^)');

    createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = '$1^';

    createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);

    // A simple gt/lt/eq thing, or just "" to indicate "any version"
    createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);

    // An expression to strip any whitespace between the gtlt and the thing
    // it modifies, so that `> 1.2.3` ==> `>1.2.3`
    createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = '$1$2$3';

    // Something like `1.2.3 - 1.2.4`
    // Note that these all use the loose form, because they'll be
    // checked against either the strict or loose comparator form
    // later.
    createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                       `\\s+-\\s+` +
                       `(${src[t.XRANGEPLAIN]})` +
                       `\\s*$`);

    createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                            `\\s+-\\s+` +
                            `(${src[t.XRANGEPLAINLOOSE]})` +
                            `\\s*$`);

    // Star ranges basically just allow anything at all.
    createToken('STAR', '(<|>)?=?\\s*\\*');
    // >=0.0.0 is like a star
    createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$');
    createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$');
    }(re$5, re$5.exports));

    // parse out just the options we care about so we always get a consistent
    // obj with keys in a consistent order.
    const opts = ['includePrerelease', 'loose', 'rtl'];
    const parseOptions$4 = options =>
      !options ? {}
      : typeof options !== 'object' ? { loose: true }
      : opts.filter(k => options[k]).reduce((options, k) => {
        options[k] = true;
        return options
      }, {});
    var parseOptions_1 = parseOptions$4;

    const numeric = /^[0-9]+$/;
    const compareIdentifiers$1 = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);

      if (anum && bnum) {
        a = +a;
        b = +b;
      }

      return a === b ? 0
        : (anum && !bnum) ? -1
        : (bnum && !anum) ? 1
        : a < b ? -1
        : 1
    };

    const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);

    var identifiers = {
      compareIdentifiers: compareIdentifiers$1,
      rcompareIdentifiers
    };

    const debug$2 = debug_1;
    const { MAX_LENGTH: MAX_LENGTH$1, MAX_SAFE_INTEGER } = constants;
    const { re: re$4, t: t$4 } = re$5.exports;

    const parseOptions$3 = parseOptions_1;
    const { compareIdentifiers } = identifiers;
    class SemVer$e {
      constructor (version, options) {
        options = parseOptions$3(options);

        if (version instanceof SemVer$e) {
          if (version.loose === !!options.loose &&
              version.includePrerelease === !!options.includePrerelease) {
            return version
          } else {
            version = version.version;
          }
        } else if (typeof version !== 'string') {
          throw new TypeError(`Invalid Version: ${version}`)
        }

        if (version.length > MAX_LENGTH$1) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH$1} characters`
          )
        }

        debug$2('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;

        const m = version.trim().match(options.loose ? re$4[t$4.LOOSE] : re$4[t$4.FULL]);

        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`)
        }

        this.raw = version;

        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];

        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError('Invalid major version')
        }

        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError('Invalid minor version')
        }

        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError('Invalid patch version')
        }

        // numberify any prerelease numeric ids
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split('.').map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num
              }
            }
            return id
          });
        }

        this.build = m[5] ? m[5].split('.') : [];
        this.format();
      }

      format () {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version
      }

      toString () {
        return this.version
      }

      compare (other) {
        debug$2('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer$e)) {
          if (typeof other === 'string' && other === this.version) {
            return 0
          }
          other = new SemVer$e(other, this.options);
        }

        if (other.version === this.version) {
          return 0
        }

        return this.compareMain(other) || this.comparePre(other)
      }

      compareMain (other) {
        if (!(other instanceof SemVer$e)) {
          other = new SemVer$e(other, this.options);
        }

        return (
          compareIdentifiers(this.major, other.major) ||
          compareIdentifiers(this.minor, other.minor) ||
          compareIdentifiers(this.patch, other.patch)
        )
      }

      comparePre (other) {
        if (!(other instanceof SemVer$e)) {
          other = new SemVer$e(other, this.options);
        }

        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
          return -1
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0
        }

        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug$2('prerelease compare', i, a, b);
          if (a === undefined && b === undefined) {
            return 0
          } else if (b === undefined) {
            return 1
          } else if (a === undefined) {
            return -1
          } else if (a === b) {
            continue
          } else {
            return compareIdentifiers(a, b)
          }
        } while (++i)
      }

      compareBuild (other) {
        if (!(other instanceof SemVer$e)) {
          other = new SemVer$e(other, this.options);
        }

        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug$2('prerelease compare', i, a, b);
          if (a === undefined && b === undefined) {
            return 0
          } else if (b === undefined) {
            return 1
          } else if (a === undefined) {
            return -1
          } else if (a === b) {
            continue
          } else {
            return compareIdentifiers(a, b)
          }
        } while (++i)
      }

      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc (release, identifier) {
        switch (release) {
          case 'premajor':
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc('pre', identifier);
            break
          case 'preminor':
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc('pre', identifier);
            break
          case 'prepatch':
            // If this is already a prerelease, it will bump to the next version
            // drop any prereleases that might already exist, since they are not
            // relevant at this point.
            this.prerelease.length = 0;
            this.inc('patch', identifier);
            this.inc('pre', identifier);
            break
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case 'prerelease':
            if (this.prerelease.length === 0) {
              this.inc('patch', identifier);
            }
            this.inc('pre', identifier);
            break

          case 'major':
            // If this is a pre-major version, bump up to the same major version.
            // Otherwise increment major.
            // 1.0.0-5 bumps to 1.0.0
            // 1.1.0 bumps to 2.0.0
            if (
              this.minor !== 0 ||
              this.patch !== 0 ||
              this.prerelease.length === 0
            ) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break
          case 'minor':
            // If this is a pre-minor version, bump up to the same minor version.
            // Otherwise increment minor.
            // 1.2.0-5 bumps to 1.2.0
            // 1.2.1 bumps to 1.3.0
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break
          case 'patch':
            // If this is not a pre-release version, it will increment the patch.
            // If it is a pre-release it will bump up to the same patch version.
            // 1.2.0-5 patches to 1.2.0
            // 1.2.0 patches to 1.2.1
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case 'pre':
            if (this.prerelease.length === 0) {
              this.prerelease = [0];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === 'number') {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                // didn't increment anything
                this.prerelease.push(0);
              }
            }
            if (identifier) {
              // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
              // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
              if (this.prerelease[0] === identifier) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = [identifier, 0];
                }
              } else {
                this.prerelease = [identifier, 0];
              }
            }
            break

          default:
            throw new Error(`invalid increment argument: ${release}`)
        }
        this.format();
        this.raw = this.version;
        return this
      }
    }

    var semver$1 = SemVer$e;

    const {MAX_LENGTH} = constants;
    const { re: re$3, t: t$3 } = re$5.exports;
    const SemVer$d = semver$1;

    const parseOptions$2 = parseOptions_1;
    const parse$5 = (version, options) => {
      options = parseOptions$2(options);

      if (version instanceof SemVer$d) {
        return version
      }

      if (typeof version !== 'string') {
        return null
      }

      if (version.length > MAX_LENGTH) {
        return null
      }

      const r = options.loose ? re$3[t$3.LOOSE] : re$3[t$3.FULL];
      if (!r.test(version)) {
        return null
      }

      try {
        return new SemVer$d(version, options)
      } catch (er) {
        return null
      }
    };

    var parse_1 = parse$5;

    const parse$4 = parse_1;
    const valid$1 = (version, options) => {
      const v = parse$4(version, options);
      return v ? v.version : null
    };
    var valid_1 = valid$1;

    const parse$3 = parse_1;
    const clean = (version, options) => {
      const s = parse$3(version.trim().replace(/^[=v]+/, ''), options);
      return s ? s.version : null
    };
    var clean_1 = clean;

    const SemVer$c = semver$1;

    const inc = (version, release, options, identifier) => {
      if (typeof (options) === 'string') {
        identifier = options;
        options = undefined;
      }

      try {
        return new SemVer$c(version, options).inc(release, identifier).version
      } catch (er) {
        return null
      }
    };
    var inc_1 = inc;

    const SemVer$b = semver$1;
    const compare$a = (a, b, loose) =>
      new SemVer$b(a, loose).compare(new SemVer$b(b, loose));

    var compare_1 = compare$a;

    const compare$9 = compare_1;
    const eq$2 = (a, b, loose) => compare$9(a, b, loose) === 0;
    var eq_1 = eq$2;

    const parse$2 = parse_1;
    const eq$1 = eq_1;

    const diff = (version1, version2) => {
      if (eq$1(version1, version2)) {
        return null
      } else {
        const v1 = parse$2(version1);
        const v2 = parse$2(version2);
        const hasPre = v1.prerelease.length || v2.prerelease.length;
        const prefix = hasPre ? 'pre' : '';
        const defaultResult = hasPre ? 'prerelease' : '';
        for (const key in v1) {
          if (key === 'major' || key === 'minor' || key === 'patch') {
            if (v1[key] !== v2[key]) {
              return prefix + key
            }
          }
        }
        return defaultResult // may be undefined
      }
    };
    var diff_1 = diff;

    const SemVer$a = semver$1;
    const major = (a, loose) => new SemVer$a(a, loose).major;
    var major_1 = major;

    const SemVer$9 = semver$1;
    const minor = (a, loose) => new SemVer$9(a, loose).minor;
    var minor_1 = minor;

    const SemVer$8 = semver$1;
    const patch = (a, loose) => new SemVer$8(a, loose).patch;
    var patch_1 = patch;

    const parse$1 = parse_1;
    const prerelease = (version, options) => {
      const parsed = parse$1(version, options);
      return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
    };
    var prerelease_1 = prerelease;

    const compare$8 = compare_1;
    const rcompare = (a, b, loose) => compare$8(b, a, loose);
    var rcompare_1 = rcompare;

    const compare$7 = compare_1;
    const compareLoose = (a, b) => compare$7(a, b, true);
    var compareLoose_1 = compareLoose;

    const SemVer$7 = semver$1;
    const compareBuild$2 = (a, b, loose) => {
      const versionA = new SemVer$7(a, loose);
      const versionB = new SemVer$7(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB)
    };
    var compareBuild_1 = compareBuild$2;

    const compareBuild$1 = compareBuild_1;
    const sort = (list, loose) => list.sort((a, b) => compareBuild$1(a, b, loose));
    var sort_1 = sort;

    const compareBuild = compareBuild_1;
    const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    var rsort_1 = rsort;

    const compare$6 = compare_1;
    const gt$3 = (a, b, loose) => compare$6(a, b, loose) > 0;
    var gt_1 = gt$3;

    const compare$5 = compare_1;
    const lt$2 = (a, b, loose) => compare$5(a, b, loose) < 0;
    var lt_1 = lt$2;

    const compare$4 = compare_1;
    const neq$1 = (a, b, loose) => compare$4(a, b, loose) !== 0;
    var neq_1 = neq$1;

    const compare$3 = compare_1;
    const gte$2 = (a, b, loose) => compare$3(a, b, loose) >= 0;
    var gte_1 = gte$2;

    const compare$2 = compare_1;
    const lte$2 = (a, b, loose) => compare$2(a, b, loose) <= 0;
    var lte_1 = lte$2;

    const eq = eq_1;
    const neq = neq_1;
    const gt$2 = gt_1;
    const gte$1 = gte_1;
    const lt$1 = lt_1;
    const lte$1 = lte_1;

    const cmp$1 = (a, op, b, loose) => {
      switch (op) {
        case '===':
          if (typeof a === 'object')
            a = a.version;
          if (typeof b === 'object')
            b = b.version;
          return a === b

        case '!==':
          if (typeof a === 'object')
            a = a.version;
          if (typeof b === 'object')
            b = b.version;
          return a !== b

        case '':
        case '=':
        case '==':
          return eq(a, b, loose)

        case '!=':
          return neq(a, b, loose)

        case '>':
          return gt$2(a, b, loose)

        case '>=':
          return gte$1(a, b, loose)

        case '<':
          return lt$1(a, b, loose)

        case '<=':
          return lte$1(a, b, loose)

        default:
          throw new TypeError(`Invalid operator: ${op}`)
      }
    };
    var cmp_1 = cmp$1;

    const SemVer$6 = semver$1;
    const parse = parse_1;
    const {re: re$2, t: t$2} = re$5.exports;

    const coerce = (version, options) => {
      if (version instanceof SemVer$6) {
        return version
      }

      if (typeof version === 'number') {
        version = String(version);
      }

      if (typeof version !== 'string') {
        return null
      }

      options = options || {};

      let match = null;
      if (!options.rtl) {
        match = version.match(re$2[t$2.COERCE]);
      } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        let next;
        while ((next = re$2[t$2.COERCERTL].exec(version)) &&
            (!match || match.index + match[0].length !== version.length)
        ) {
          if (!match ||
                next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re$2[t$2.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        re$2[t$2.COERCERTL].lastIndex = -1;
      }

      if (match === null)
        return null

      return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
    };
    var coerce_1 = coerce;

    var iterator = function (Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };

    var yallist = Yallist$1;

    Yallist$1.Node = Node;
    Yallist$1.create = Yallist$1;

    function Yallist$1 (list) {
      var self = this;
      if (!(self instanceof Yallist$1)) {
        self = new Yallist$1();
      }

      self.tail = null;
      self.head = null;
      self.length = 0;

      if (list && typeof list.forEach === 'function') {
        list.forEach(function (item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }

      return self
    }

    Yallist$1.prototype.removeNode = function (node) {
      if (node.list !== this) {
        throw new Error('removing node which does not belong to this list')
      }

      var next = node.next;
      var prev = node.prev;

      if (next) {
        next.prev = prev;
      }

      if (prev) {
        prev.next = next;
      }

      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }

      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;

      return next
    };

    Yallist$1.prototype.unshiftNode = function (node) {
      if (node === this.head) {
        return
      }

      if (node.list) {
        node.list.removeNode(node);
      }

      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }

      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };

    Yallist$1.prototype.pushNode = function (node) {
      if (node === this.tail) {
        return
      }

      if (node.list) {
        node.list.removeNode(node);
      }

      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }

      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };

    Yallist$1.prototype.push = function () {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length
    };

    Yallist$1.prototype.unshift = function () {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length
    };

    Yallist$1.prototype.pop = function () {
      if (!this.tail) {
        return undefined
      }

      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res
    };

    Yallist$1.prototype.shift = function () {
      if (!this.head) {
        return undefined
      }

      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res
    };

    Yallist$1.prototype.forEach = function (fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };

    Yallist$1.prototype.forEachReverse = function (fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };

    Yallist$1.prototype.get = function (n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        // abort out of the list early if we hit a cycle
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value
      }
    };

    Yallist$1.prototype.getReverse = function (n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        // abort out of the list early if we hit a cycle
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value
      }
    };

    Yallist$1.prototype.map = function (fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist$1();
      for (var walker = this.head; walker !== null;) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res
    };

    Yallist$1.prototype.mapReverse = function (fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist$1();
      for (var walker = this.tail; walker !== null;) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res
    };

    Yallist$1.prototype.reduce = function (fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError('Reduce of empty list with no initial value')
      }

      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }

      return acc
    };

    Yallist$1.prototype.reduceReverse = function (fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError('Reduce of empty list with no initial value')
      }

      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }

      return acc
    };

    Yallist$1.prototype.toArray = function () {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr
    };

    Yallist$1.prototype.toArrayReverse = function () {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr
    };

    Yallist$1.prototype.slice = function (from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist$1();
      if (to < from || to < 0) {
        return ret
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret
    };

    Yallist$1.prototype.sliceReverse = function (from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist$1();
      if (to < from || to < 0) {
        return ret
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret
    };

    Yallist$1.prototype.splice = function (start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }

      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }

      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }

      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }

      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };

    Yallist$1.prototype.reverse = function () {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this
    };

    function insert (self, node, value) {
      var inserted = node === self.head ?
        new Node(value, null, node, self) :
        new Node(value, node, node.next, self);

      if (inserted.next === null) {
        self.tail = inserted;
      }
      if (inserted.prev === null) {
        self.head = inserted;
      }

      self.length++;

      return inserted
    }

    function push (self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }

    function unshift (self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }

    function Node (value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list)
      }

      this.list = list;
      this.value = value;

      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }

      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }

    try {
      // add if support for Symbol.iterator is present
      iterator(Yallist$1);
    } catch (er) {}

    // A linked list to keep track of recently-used-ness
    const Yallist = yallist;

    const MAX = Symbol('max');
    const LENGTH = Symbol('length');
    const LENGTH_CALCULATOR = Symbol('lengthCalculator');
    const ALLOW_STALE = Symbol('allowStale');
    const MAX_AGE = Symbol('maxAge');
    const DISPOSE = Symbol('dispose');
    const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
    const LRU_LIST = Symbol('lruList');
    const CACHE = Symbol('cache');
    const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');

    const naiveLength = () => 1;

    // lruList is a yallist where the head is the youngest
    // item, and the tail is the oldest.  the list contains the Hit
    // objects as the entries.
    // Each Hit object has a reference to its Yallist.Node.  This
    // never changes.
    //
    // cache is a Map (or PseudoMap) that matches the keys to
    // the Yallist.Node object.
    class LRUCache {
      constructor (options) {
        if (typeof options === 'number')
          options = { max: options };

        if (!options)
          options = {};

        if (options.max && (typeof options.max !== 'number' || options.max < 0))
          throw new TypeError('max must be a non-negative number')
        // Kind of weird to have a default max of Infinity, but oh well.
        this[MAX] = options.max || Infinity;

        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== 'number')
          throw new TypeError('maxAge must be a number')
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }

      // resize the cache when the max changes.
      set max (mL) {
        if (typeof mL !== 'number' || mL < 0)
          throw new TypeError('max must be a non-negative number')

        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max () {
        return this[MAX]
      }

      set allowStale (allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale () {
        return this[ALLOW_STALE]
      }

      set maxAge (mA) {
        if (typeof mA !== 'number')
          throw new TypeError('maxAge must be a non-negative number')

        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge () {
        return this[MAX_AGE]
      }

      // resize the cache when the lengthCalculator changes.
      set lengthCalculator (lC) {
        if (typeof lC !== 'function')
          lC = naiveLength;

        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach(hit => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator () { return this[LENGTH_CALCULATOR] }

      get length () { return this[LENGTH] }
      get itemCount () { return this[LRU_LIST].length }

      rforEach (fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null;) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }

      forEach (fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null;) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }

      keys () {
        return this[LRU_LIST].toArray().map(k => k.key)
      }

      values () {
        return this[LRU_LIST].toArray().map(k => k.value)
      }

      reset () {
        if (this[DISPOSE] &&
            this[LRU_LIST] &&
            this[LRU_LIST].length) {
          this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value));
        }

        this[CACHE] = new Map(); // hash of items by key
        this[LRU_LIST] = new Yallist(); // list of items in order of use recency
        this[LENGTH] = 0; // length of items in the list
      }

      dump () {
        return this[LRU_LIST].map(hit =>
          isStale(this, hit) ? false : {
            k: hit.key,
            v: hit.value,
            e: hit.now + (hit.maxAge || 0)
          }).toArray().filter(h => h)
      }

      dumpLru () {
        return this[LRU_LIST]
      }

      set (key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];

        if (maxAge && typeof maxAge !== 'number')
          throw new TypeError('maxAge must be a number')

        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);

        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false
          }

          const node = this[CACHE].get(key);
          const item = node.value;

          // dispose of the old one before overwriting
          // split out into 2 ifs for better coverage tracking
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }

          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true
        }

        const hit = new Entry(key, value, len, now, maxAge);

        // oversized objects fall out of cache automatically.
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);

          return false
        }

        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true
      }

      has (key) {
        if (!this[CACHE].has(key)) return false
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit)
      }

      get (key) {
        return get(this, key, true)
      }

      peek (key) {
        return get(this, key, false)
      }

      pop () {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null

        del(this, node);
        return node.value
      }

      del (key) {
        del(this, this[CACHE].get(key));
      }

      load (arr) {
        // reset the cache
        this.reset();

        const now = Date.now();
        // A previous serialized cache has the most recent items first
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            // the item was created without expiration in a non aged cache
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            // dont add already expired items
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }

      prune () {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    }

    const get = (self, key, doUse) => {
      const node = self[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
          del(self, node);
          if (!self[ALLOW_STALE])
            return undefined
        } else {
          if (doUse) {
            if (self[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value
      }
    };

    const isStale = (self, hit) => {
      if (!hit || (!hit.maxAge && !self[MAX_AGE]))
        return false

      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge
        : self[MAX_AGE] && (diff > self[MAX_AGE])
    };

    const trim = self => {
      if (self[LENGTH] > self[MAX]) {
        for (let walker = self[LRU_LIST].tail;
          self[LENGTH] > self[MAX] && walker !== null;) {
          // We know that we're about to delete this one, and also
          // what the next least recently used key will be, so just
          // go ahead and set it now.
          const prev = walker.prev;
          del(self, walker);
          walker = prev;
        }
      }
    };

    const del = (self, node) => {
      if (node) {
        const hit = node.value;
        if (self[DISPOSE])
          self[DISPOSE](hit.key, hit.value);

        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
      }
    };

    class Entry {
      constructor (key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    }

    const forEachStep = (self, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE])
          hit = undefined;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self);
    };

    var lruCache = LRUCache;

    // hoisted class for cyclic dependency
    class Range$a {
      constructor (range, options) {
        options = parseOptions$1(options);

        if (range instanceof Range$a) {
          if (
            range.loose === !!options.loose &&
            range.includePrerelease === !!options.includePrerelease
          ) {
            return range
          } else {
            return new Range$a(range.raw, options)
          }
        }

        if (range instanceof Comparator$3) {
          // just put it in the set and return
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this
        }

        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;

        // First, split based on boolean or ||
        this.raw = range;
        this.set = range
          .split(/\s*\|\|\s*/)
          // map the range to a 2d array of comparators
          .map(range => this.parseRange(range.trim()))
          // throw out any comparator lists that are empty
          // this generally means that it was not a valid range, which is allowed
          // in loose mode, but will still throw if the WHOLE range is invalid.
          .filter(c => c.length);

        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${range}`)
        }

        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
          // keep the first one, in case they're all null sets
          const first = this.set[0];
          this.set = this.set.filter(c => !isNullSet(c[0]));
          if (this.set.length === 0)
            this.set = [first];
          else if (this.set.length > 1) {
            // if we have any that are *, then the range is just *
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break
              }
            }
          }
        }

        this.format();
      }

      format () {
        this.range = this.set
          .map((comps) => {
            return comps.join(' ').trim()
          })
          .join('||')
          .trim();
        return this.range
      }

      toString () {
        return this.range
      }

      parseRange (range) {
        range = range.trim();

        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = Object.keys(this.options).join(',');
        const memoKey = `parseRange:${memoOpts}:${range}`;
        const cached = cache.get(memoKey);
        if (cached)
          return cached

        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re$1[t$1.HYPHENRANGELOOSE] : re$1[t$1.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug$1('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re$1[t$1.COMPARATORTRIM], comparatorTrimReplace);
        debug$1('comparator trim', range, re$1[t$1.COMPARATORTRIM]);

        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re$1[t$1.TILDETRIM], tildeTrimReplace);

        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re$1[t$1.CARETTRIM], caretTrimReplace);

        // normalize spaces
        range = range.split(/\s+/).join(' ');

        // At this point, the range is completely trimmed and
        // ready to be split into comparators.

        const compRe = loose ? re$1[t$1.COMPARATORLOOSE] : re$1[t$1.COMPARATOR];
        const rangeList = range
          .split(' ')
          .map(comp => parseComparator(comp, this.options))
          .join(' ')
          .split(/\s+/)
          // >=0.0.0 is equivalent to *
          .map(comp => replaceGTE0(comp, this.options))
          // in loose mode, throw out any that are not valid comparators
          .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
          .map(comp => new Comparator$3(comp, this.options));

        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        rangeList.length;
        const rangeMap = new Map();
        for (const comp of rangeList) {
          if (isNullSet(comp))
            return [comp]
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has(''))
          rangeMap.delete('');

        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result
      }

      intersects (range, options) {
        if (!(range instanceof Range$a)) {
          throw new TypeError('a Range is required')
        }

        return this.set.some((thisComparators) => {
          return (
            isSatisfiable(thisComparators, options) &&
            range.set.some((rangeComparators) => {
              return (
                isSatisfiable(rangeComparators, options) &&
                thisComparators.every((thisComparator) => {
                  return rangeComparators.every((rangeComparator) => {
                    return thisComparator.intersects(rangeComparator, options)
                  })
                })
              )
            })
          )
        })
      }

      // if ANY of the sets match ALL of its comparators, then pass
      test (version) {
        if (!version) {
          return false
        }

        if (typeof version === 'string') {
          try {
            version = new SemVer$5(version, this.options);
          } catch (er) {
            return false
          }
        }

        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true
          }
        }
        return false
      }
    }
    var range = Range$a;

    const LRU = lruCache;
    const cache = new LRU({ max: 1000 });

    const parseOptions$1 = parseOptions_1;
    const Comparator$3 = comparator;
    const debug$1 = debug_1;
    const SemVer$5 = semver$1;
    const {
      re: re$1,
      t: t$1,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = re$5.exports;

    const isNullSet = c => c.value === '<0.0.0-0';
    const isAny = c => c.value === '';

    // take a set of comparators and determine whether there
    // exists a version which can satisfy it
    const isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();

      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options)
        });

        testComparator = remainingComparators.pop();
      }

      return result
    };

    // comprised of xranges, tildes, stars, and gtlt's at this point.
    // already replaced the hyphen ranges
    // turn into a set of JUST comparators.
    const parseComparator = (comp, options) => {
      debug$1('comp', comp, options);
      comp = replaceCarets(comp, options);
      debug$1('caret', comp);
      comp = replaceTildes(comp, options);
      debug$1('tildes', comp);
      comp = replaceXRanges(comp, options);
      debug$1('xrange', comp);
      comp = replaceStars(comp, options);
      debug$1('stars', comp);
      return comp
    };

    const isX = id => !id || id.toLowerCase() === 'x' || id === '*';

    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    const replaceTildes = (comp, options) =>
      comp.trim().split(/\s+/).map((comp) => {
        return replaceTilde(comp, options)
      }).join(' ');

    const replaceTilde = (comp, options) => {
      const r = options.loose ? re$1[t$1.TILDELOOSE] : re$1[t$1.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug$1('tilde', comp, _, M, m, p, pr);
        let ret;

        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          // ~1.2 == >=1.2.0 <1.3.0-0
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug$1('replaceTilde pr', pr);
          ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`;
        } else {
          // ~1.2.3 == >=1.2.3 <1.3.0-0
          ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`;
        }

        debug$1('tilde return', ret);
        return ret
      })
    };

    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    const replaceCarets = (comp, options) =>
      comp.trim().split(/\s+/).map((comp) => {
        return replaceCaret(comp, options)
      }).join(' ');

    const replaceCaret = (comp, options) => {
      debug$1('caret', comp, options);
      const r = options.loose ? re$1[t$1.CARETLOOSE] : re$1[t$1.CARET];
      const z = options.includePrerelease ? '-0' : '';
      return comp.replace(r, (_, M, m, p, pr) => {
        debug$1('caret', comp, _, M, m, p, pr);
        let ret;

        if (isX(M)) {
          ret = '';
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === '0') {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug$1('replaceCaret pr', pr);
          if (M === '0') {
            if (m === '0') {
              ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`;
          }
        } else {
          debug$1('no pr');
          if (M === '0') {
            if (m === '0') {
              ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`;
          }
        }

        debug$1('caret return', ret);
        return ret
      })
    };

    const replaceXRanges = (comp, options) => {
      debug$1('replaceXRanges', comp, options);
      return comp.split(/\s+/).map((comp) => {
        return replaceXRange(comp, options)
      }).join(' ')
    };

    const replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re$1[t$1.XRANGELOOSE] : re$1[t$1.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug$1('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;

        if (gtlt === '=' && anyX) {
          gtlt = '';
        }

        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';

        if (xM) {
          if (gtlt === '>' || gtlt === '<') {
            // nothing is allowed
            ret = '<0.0.0-0';
          } else {
            // nothing is forbidden
            ret = '*';
          }
        } else if (gtlt && anyX) {
          // we know patch is an x, because we have any x at all.
          // replace X with 0
          if (xm) {
            m = 0;
          }
          p = 0;

          if (gtlt === '>') {
            // >1 => >=2.0.0
            // >1.2 => >=1.3.0
            gtlt = '>=';
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === '<=') {
            // <=0.7.x is actually <0.8.0, since any 0.7.x should
            // pass.  Similarly, <=7.x is actually <8.0.0, etc.
            gtlt = '<';
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }

          if (gtlt === '<')
            pr = '-0';

          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`;
        }

        debug$1('xRange return', ret);

        return ret
      })
    };

    // Because * is AND-ed with everything else in the comparator,
    // and '' means "any version", just remove the *s entirely.
    const replaceStars = (comp, options) => {
      debug$1('replaceStars', comp, options);
      // Looseness is ignored here.  star is always as loose as it gets!
      return comp.trim().replace(re$1[t$1.STAR], '')
    };

    const replaceGTE0 = (comp, options) => {
      debug$1('replaceGTE0', comp, options);
      return comp.trim()
        .replace(re$1[options.includePrerelease ? t$1.GTE0PRE : t$1.GTE0], '')
    };

    // This function is passed to string.replace(re[t.HYPHENRANGE])
    // M, m, patch, prerelease, build
    // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
    // 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
    // 1.2 - 3.4 => >=1.2.0 <3.5.0-0
    const hyphenReplace = incPr => ($0,
      from, fM, fm, fp, fpr, fb,
      to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = '';
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? '-0' : ''}`;
      }

      if (isX(tM)) {
        to = '';
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }

      return (`${from} ${to}`).trim()
    };

    const testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false
        }
      }

      if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for (let i = 0; i < set.length; i++) {
          debug$1(set[i].semver);
          if (set[i].semver === Comparator$3.ANY) {
            continue
          }

          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major &&
                allowed.minor === version.minor &&
                allowed.patch === version.patch) {
              return true
            }
          }
        }

        // Version has a -pre, but it's not one of the ones we like.
        return false
      }

      return true
    };

    const ANY$2 = Symbol('SemVer ANY');
    // hoisted class for cyclic dependency
    class Comparator$2 {
      static get ANY () {
        return ANY$2
      }
      constructor (comp, options) {
        options = parseOptions(options);

        if (comp instanceof Comparator$2) {
          if (comp.loose === !!options.loose) {
            return comp
          } else {
            comp = comp.value;
          }
        }

        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);

        if (this.semver === ANY$2) {
          this.value = '';
        } else {
          this.value = this.operator + this.semver.version;
        }

        debug('comp', this);
      }

      parse (comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);

        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`)
        }

        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
          this.operator = '';
        }

        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
          this.semver = ANY$2;
        } else {
          this.semver = new SemVer$4(m[2], this.options.loose);
        }
      }

      toString () {
        return this.value
      }

      test (version) {
        debug('Comparator.test', version, this.options.loose);

        if (this.semver === ANY$2 || version === ANY$2) {
          return true
        }

        if (typeof version === 'string') {
          try {
            version = new SemVer$4(version, this.options);
          } catch (er) {
            return false
          }
        }

        return cmp(version, this.operator, this.semver, this.options)
      }

      intersects (comp, options) {
        if (!(comp instanceof Comparator$2)) {
          throw new TypeError('a Comparator is required')
        }

        if (!options || typeof options !== 'object') {
          options = {
            loose: !!options,
            includePrerelease: false
          };
        }

        if (this.operator === '') {
          if (this.value === '') {
            return true
          }
          return new Range$9(comp.value, options).test(this.value)
        } else if (comp.operator === '') {
          if (comp.value === '') {
            return true
          }
          return new Range$9(this.value, options).test(comp.semver)
        }

        const sameDirectionIncreasing =
          (this.operator === '>=' || this.operator === '>') &&
          (comp.operator === '>=' || comp.operator === '>');
        const sameDirectionDecreasing =
          (this.operator === '<=' || this.operator === '<') &&
          (comp.operator === '<=' || comp.operator === '<');
        const sameSemVer = this.semver.version === comp.semver.version;
        const differentDirectionsInclusive =
          (this.operator === '>=' || this.operator === '<=') &&
          (comp.operator === '>=' || comp.operator === '<=');
        const oppositeDirectionsLessThan =
          cmp(this.semver, '<', comp.semver, options) &&
          (this.operator === '>=' || this.operator === '>') &&
            (comp.operator === '<=' || comp.operator === '<');
        const oppositeDirectionsGreaterThan =
          cmp(this.semver, '>', comp.semver, options) &&
          (this.operator === '<=' || this.operator === '<') &&
            (comp.operator === '>=' || comp.operator === '>');

        return (
          sameDirectionIncreasing ||
          sameDirectionDecreasing ||
          (sameSemVer && differentDirectionsInclusive) ||
          oppositeDirectionsLessThan ||
          oppositeDirectionsGreaterThan
        )
      }
    }

    var comparator = Comparator$2;

    const parseOptions = parseOptions_1;
    const {re, t} = re$5.exports;
    const cmp = cmp_1;
    const debug = debug_1;
    const SemVer$4 = semver$1;
    const Range$9 = range;

    const Range$8 = range;
    const satisfies$3 = (version, range, options) => {
      try {
        range = new Range$8(range, options);
      } catch (er) {
        return false
      }
      return range.test(version)
    };
    var satisfies_1 = satisfies$3;

    const Range$7 = range;

    // Mostly just for testing and legacy API reasons
    const toComparators = (range, options) =>
      new Range$7(range, options).set
        .map(comp => comp.map(c => c.value).join(' ').trim().split(' '));

    var toComparators_1 = toComparators;

    const SemVer$3 = semver$1;
    const Range$6 = range;

    const maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range$6(range, options);
      } catch (er) {
        return null
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!max || maxSV.compare(v) === -1) {
            // compare(max, v, true)
            max = v;
            maxSV = new SemVer$3(max, options);
          }
        }
      });
      return max
    };
    var maxSatisfying_1 = maxSatisfying;

    const SemVer$2 = semver$1;
    const Range$5 = range;
    const minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range$5(range, options);
      } catch (er) {
        return null
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          // satisfies(v, range, options)
          if (!min || minSV.compare(v) === 1) {
            // compare(min, v, true)
            min = v;
            minSV = new SemVer$2(min, options);
          }
        }
      });
      return min
    };
    var minSatisfying_1 = minSatisfying;

    const SemVer$1 = semver$1;
    const Range$4 = range;
    const gt$1 = gt_1;

    const minVersion = (range, loose) => {
      range = new Range$4(range, loose);

      let minver = new SemVer$1('0.0.0');
      if (range.test(minver)) {
        return minver
      }

      minver = new SemVer$1('0.0.0-0');
      if (range.test(minver)) {
        return minver
      }

      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];

        let setMin = null;
        comparators.forEach((comparator) => {
          // Clone to avoid manipulating the comparator's semver object.
          const compver = new SemVer$1(comparator.semver.version);
          switch (comparator.operator) {
            case '>':
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
              /* fallthrough */
            case '':
            case '>=':
              if (!setMin || gt$1(compver, setMin)) {
                setMin = compver;
              }
              break
            case '<':
            case '<=':
              /* Ignore maximum versions */
              break
            /* istanbul ignore next */
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`)
          }
        });
        if (setMin && (!minver || gt$1(minver, setMin)))
          minver = setMin;
      }

      if (minver && range.test(minver)) {
        return minver
      }

      return null
    };
    var minVersion_1 = minVersion;

    const Range$3 = range;
    const validRange = (range, options) => {
      try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range$3(range, options).range || '*'
      } catch (er) {
        return null
      }
    };
    var valid = validRange;

    const SemVer = semver$1;
    const Comparator$1 = comparator;
    const {ANY: ANY$1} = Comparator$1;
    const Range$2 = range;
    const satisfies$2 = satisfies_1;
    const gt = gt_1;
    const lt = lt_1;
    const lte = lte_1;
    const gte = gte_1;

    const outside$2 = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range$2(range, options);

      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case '>':
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = '>';
          ecomp = '>=';
          break
        case '<':
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = '<';
          ecomp = '<=';
          break
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"')
      }

      // If it satisfies the range it is not outside
      if (satisfies$2(version, range, options)) {
        return false
      }

      // From now on, variable terms are as if we're in "gtr" mode.
      // but note that everything is flipped for the "ltr" function.

      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];

        let high = null;
        let low = null;

        comparators.forEach((comparator) => {
          if (comparator.semver === ANY$1) {
            comparator = new Comparator$1('>=0.0.0');
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });

        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
          return false
        }

        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) &&
            ltefn(version, low.semver)) {
          return false
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false
        }
      }
      return true
    };

    var outside_1 = outside$2;

    // Determine if version is greater than all the versions possible in the range.
    const outside$1 = outside_1;
    const gtr = (version, range, options) => outside$1(version, range, '>', options);
    var gtr_1 = gtr;

    const outside = outside_1;
    // Determine if version is less than all the versions possible in the range
    const ltr = (version, range, options) => outside(version, range, '<', options);
    var ltr_1 = ltr;

    const Range$1 = range;
    const intersects = (r1, r2, options) => {
      r1 = new Range$1(r1, options);
      r2 = new Range$1(r2, options);
      return r1.intersects(r2)
    };
    var intersects_1 = intersects;

    // given a set of versions and a range, create a "simplified" range
    // that includes the same versions that the original range does
    // If the original range is shorter than the simplified one, return that.
    const satisfies$1 = satisfies_1;
    const compare$1 = compare_1;
    var simplify = (versions, range, options) => {
      const set = [];
      let min = null;
      let prev = null;
      const v = versions.sort((a, b) => compare$1(a, b, options));
      for (const version of v) {
        const included = satisfies$1(version, range, options);
        if (included) {
          prev = version;
          if (!min)
            min = version;
        } else {
          if (prev) {
            set.push([min, prev]);
          }
          prev = null;
          min = null;
        }
      }
      if (min)
        set.push([min, null]);

      const ranges = [];
      for (const [min, max] of set) {
        if (min === max)
          ranges.push(min);
        else if (!max && min === v[0])
          ranges.push('*');
        else if (!max)
          ranges.push(`>=${min}`);
        else if (min === v[0])
          ranges.push(`<=${max}`);
        else
          ranges.push(`${min} - ${max}`);
      }
      const simplified = ranges.join(' || ');
      const original = typeof range.raw === 'string' ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range
    };

    const Range = range;
    const Comparator = comparator;
    const { ANY } = Comparator;
    const satisfies = satisfies_1;
    const compare = compare_1;

    // Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
    // - Every simple range `r1, r2, ...` is a null set, OR
    // - Every simple range `r1, r2, ...` which is not a null set is a subset of
    //   some `R1, R2, ...`
    //
    // Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
    // - If c is only the ANY comparator
    //   - If C is only the ANY comparator, return true
    //   - Else if in prerelease mode, return false
    //   - else replace c with `[>=0.0.0]`
    // - If C is only the ANY comparator
    //   - if in prerelease mode, return true
    //   - else replace C with `[>=0.0.0]`
    // - Let EQ be the set of = comparators in c
    // - If EQ is more than one, return true (null set)
    // - Let GT be the highest > or >= comparator in c
    // - Let LT be the lowest < or <= comparator in c
    // - If GT and LT, and GT.semver > LT.semver, return true (null set)
    // - If any C is a = range, and GT or LT are set, return false
    // - If EQ
    //   - If GT, and EQ does not satisfy GT, return true (null set)
    //   - If LT, and EQ does not satisfy LT, return true (null set)
    //   - If EQ satisfies every C, return true
    //   - Else return false
    // - If GT
    //   - If GT.semver is lower than any > or >= comp in C, return false
    //   - If GT is >=, and GT.semver does not satisfy every C, return false
    //   - If GT.semver has a prerelease, and not in prerelease mode
    //     - If no C has a prerelease and the GT.semver tuple, return false
    // - If LT
    //   - If LT.semver is greater than any < or <= comp in C, return false
    //   - If LT is <=, and LT.semver does not satisfy every C, return false
    //   - If GT.semver has a prerelease, and not in prerelease mode
    //     - If no C has a prerelease and the LT.semver tuple, return false
    // - Else return true

    const subset = (sub, dom, options = {}) => {
      if (sub === dom)
        return true

      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;

      OUTER: for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub)
            continue OUTER
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull)
          return false
      }
      return true
    };

    const simpleSubset = (sub, dom, options) => {
      if (sub === dom)
        return true

      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY)
          return true
        else if (options.includePrerelease)
          sub = [ new Comparator('>=0.0.0-0') ];
        else
          sub = [ new Comparator('>=0.0.0') ];
      }

      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease)
          return true
        else
          dom = [ new Comparator('>=0.0.0') ];
      }

      const eqSet = new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === '>' || c.operator === '>=')
          gt = higherGT(gt, c, options);
        else if (c.operator === '<' || c.operator === '<=')
          lt = lowerLT(lt, c, options);
        else
          eqSet.add(c.semver);
      }

      if (eqSet.size > 1)
        return null

      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0)
          return null
        else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<='))
          return null
      }

      // will iterate one or zero times
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options))
          return null

        if (lt && !satisfies(eq, String(lt), options))
          return null

        for (const c of dom) {
          if (!satisfies(eq, String(c), options))
            return false
        }

        return true
      }

      let higher, lower;
      let hasDomLT, hasDomGT;
      // if the subset has a prerelease, we need a comparator in the superset
      // with the same tuple and a prerelease, or it's not a subset
      let needDomLTPre = lt &&
        !options.includePrerelease &&
        lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt &&
        !options.includePrerelease &&
        gt.semver.prerelease.length ? gt.semver : false;
      // exception: <1.2.3-0 is the same as <1.2.3
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
          lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }

      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length &&
                c.semver.major === needDomGTPre.major &&
                c.semver.minor === needDomGTPre.minor &&
                c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === '>' || c.operator === '>=') {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt)
              return false
          } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options))
            return false
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length &&
                c.semver.major === needDomLTPre.major &&
                c.semver.minor === needDomLTPre.minor &&
                c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === '<' || c.operator === '<=') {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt)
              return false
          } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options))
            return false
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0)
          return false
      }

      // if there was a < or >, and nothing in the dom, then must be false
      // UNLESS it was limited by another range in the other direction.
      // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
      if (gt && hasDomLT && !lt && gtltComp !== 0)
        return false

      if (lt && hasDomGT && !gt && gtltComp !== 0)
        return false

      // we needed a prerelease range in a specific tuple, but didn't get one
      // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
      // because it includes prereleases in the 1.2.3 tuple
      if (needDomGTPre || needDomLTPre)
        return false

      return true
    };

    // >=1.2.3 is lower than >1.2.3
    const higherGT = (a, b, options) => {
      if (!a)
        return b
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a
        : comp < 0 ? b
        : b.operator === '>' && a.operator === '>=' ? b
        : a
    };

    // <=1.2.3 is higher than <1.2.3
    const lowerLT = (a, b, options) => {
      if (!a)
        return b
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a
        : comp > 0 ? b
        : b.operator === '<' && a.operator === '<=' ? b
        : a
    };

    var subset_1 = subset;

    // just pre-load all the stuff that index.js lazily exports
    const internalRe = re$5.exports;
    var semver = {
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      SemVer: semver$1,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers,
      parse: parse_1,
      valid: valid_1,
      clean: clean_1,
      inc: inc_1,
      diff: diff_1,
      major: major_1,
      minor: minor_1,
      patch: patch_1,
      prerelease: prerelease_1,
      compare: compare_1,
      rcompare: rcompare_1,
      compareLoose: compareLoose_1,
      compareBuild: compareBuild_1,
      sort: sort_1,
      rsort: rsort_1,
      gt: gt_1,
      lt: lt_1,
      eq: eq_1,
      neq: neq_1,
      gte: gte_1,
      lte: lte_1,
      cmp: cmp_1,
      coerce: coerce_1,
      Comparator: comparator,
      Range: range,
      satisfies: satisfies_1,
      toComparators: toComparators_1,
      maxSatisfying: maxSatisfying_1,
      minSatisfying: minSatisfying_1,
      minVersion: minVersion_1,
      validRange: valid,
      outside: outside_1,
      gtr: gtr_1,
      ltr: ltr_1,
      intersects: intersects_1,
      simplifyRange: simplify,
      subset: subset_1,
    };

    var Event = /** @class */ (function () {
        function Event(name, data) {
            if (data === void 0) { data = {}; }
            this.name = name;
            this.data = data;
        }
        return Event;
    }());
    var PluginStore = /** @class */ (function (_super) {
        __extends(PluginStore, _super);
        function PluginStore() {
            var _this = _super.call(this) || this;
            _this._observerMap = new Map();
            _this._functionArray = new Map();
            _this._pluginMap = new Map();
            return _this;
        }
        Object.defineProperty(PluginStore.prototype, "observerMap", {
            get: function () {
                return this._observerMap;
            },
            enumerable: false,
            configurable: true
        });
        PluginStore.prototype.dependencyValid = function (installedVersion, requiredVersion) {
            var versionDiff = semver.diff(installedVersion, requiredVersion);
            return ((versionDiff === null ||
                versionDiff === "patch" ||
                versionDiff === "minor") &&
                semver.gte(installedVersion, requiredVersion));
        };
        PluginStore.prototype.getInstalledPlugins = function () {
            return Array.from(this._pluginMap.values());
        };
        PluginStore.prototype.install = function (plugin) {
            var _this = this;
            var pluginNameAndVer = plugin.getPluginIdentify();
            var _a = pluginNameAndVer.split("@"), pluginName = _a[0]; _a[1];
            var pluginDependencies = plugin.getDependencies() || [];
            var installed = this._pluginMap.get(pluginName);
            if (installed) {
                return;
            }
            // check dependencies is installed
            var installErrors = [];
            pluginDependencies.forEach(function (dep) {
                var _a = dep.split("@"), depName = _a[0], depVersion = _a[1];
                var plugin = _this._pluginMap.get(depName);
                if (!plugin) {
                    installErrors.push("Plugin " + pluginName + ": " + depName + " has not installed!");
                }
                else {
                    var _b = plugin.getPluginIdentify().split("@"), installedVersion = _b[1];
                    if (!_this.dependencyValid(installedVersion, depVersion)) {
                        installErrors.push("Plugin " + pluginName + " need " + depName + "@" + depVersion + ", but " + installedVersion + " installed!");
                    }
                }
            });
            if (installErrors.length === 0) {
                this._pluginMap.set(pluginName, plugin);
                plugin.activate();
            }
            else {
                installErrors.forEach(function (err) { return console.error(err); });
            }
        };
        PluginStore.prototype.uninstall = function (pluginName) {
            var plugin = this._pluginMap.get(pluginName);
            if (plugin) {
                plugin.deactivate();
                this._pluginMap.delete(pluginName);
            }
        };
        PluginStore.prototype.addFunction = function (key, fn) {
            this._functionArray.set(key, fn);
        };
        PluginStore.prototype.execFunction = function (key) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var fn = this._functionArray.get(key);
            if (fn) {
                return fn.apply(void 0, args);
            }
        };
        PluginStore.prototype.removeFunction = function (key) {
            this._functionArray.delete(key);
        };
        PluginStore.prototype.addEventListener = function (name, listener) {
            this.addListener(name, listener);
        };
        PluginStore.prototype.addOnceEventListener = function (name, listener) {
            this.once(name, listener);
        };
        PluginStore.prototype.removeEventListener = function (name, listener) {
            this.removeListener(name, listener);
        };
        PluginStore.prototype.dispatchEvent = function (event) {
            this.emit(event.name, event);
        };
        PluginStore.prototype.removeAllEvents = function () {
            this.removeAllListeners();
        };
        PluginStore.prototype.registObserver = function (name, data) {
            this._observerMap.set(name, new rxjs.BehaviorSubject(data || null));
        };
        PluginStore.prototype.getObserver = function (name) {
            return this._observerMap.get(name);
        };
        return PluginStore;
    }(events.EventEmitter));

    exports.Severity = void 0;
    (function (Severity) {
        Severity["SUCCESS"] = "success";
        Severity["ERROR"] = "error";
        Severity["INFO"] = "info";
    })(exports.Severity || (exports.Severity = {}));
    var QingCore = /** @class */ (function (_super) {
        __extends(QingCore, _super);
        function QingCore() {
            var _this = _super.call(this) || this;
            _this.pluginVariables = new Map();
            _this.services = new Map();
            return _this;
        }
        QingCore_1 = QingCore;
        /**
         * 将angular的service实例注入
         * @param service AngularService
         * @param serviceInstance AngularService Instance
         */
        QingCore.prototype.InjectService = function (service, serviceInstance) {
            this.services.set(service.name, serviceInstance);
        };
        /**
         * 获取某个Service实例
         * @param service
         */
        QingCore.prototype.GetService = function (service) {
            return this.services.get(service.name);
        };
        /****************************** Plugin Api *****************************/
        QingCore.prototype.InstallPlugin = function (plugin) {
            this.install(plugin);
        };
        QingCore.prototype.UninstallPlugin = function (pluginName) {
            this.uninstall(pluginName);
        };
        QingCore.prototype.EnablePlugin = function (pluginName, pluginConfig) { };
        QingCore.prototype.DisablePlugin = function (pluginName) {
            var _this = this;
            var variables = this.pluginVariables.get(pluginName);
            if (variables && variables.length > 0) {
                var observers = variables.map(function (varName) {
                    return _this.observerMap.get(varName);
                });
                observers.forEach(function (observer) {
                    if (observer) {
                        observer.next(null);
                        observer.complete();
                    }
                });
            }
        };
        /*******************************************************************************/
        /****************************** UI Api *****************************/
        QingCore.prototype.Toast = function (severity, message) {
            this.Emit(new Event(exports.UIEvents.TOAST, { severity: severity, message: message }));
        };
        QingCore.prototype.Alert = function (message) {
            this.Emit(new Event(exports.UIEvents.ALERT, { message: message }));
        };
        QingCore.prototype.OpenDialog = function (componentName) {
            this.Emit(new Event(exports.UIEvents.OPEN_DIALOG, { componentName: componentName }));
        };
        QingCore.prototype.CloseDialog = function () {
            this.Emit(new Event(exports.UIEvents.CLOSE_DIALOG));
        };
        QingCore.prototype.LoadInMenu = function (componentName) {
            this.Emit(new Event(exports.UIEvents.LOAD_IN_MENU, { componentName: componentName }));
        };
        QingCore.prototype.LoadInSidebar = function (componentName) {
            this.Emit(new Event(exports.UIEvents.LOAD_IN_SIDEBAR, { componentName: componentName }));
        };
        QingCore.prototype.LoadInEditorArea = function (componentName) {
            this.Emit(new Event(exports.UIEvents.LOAD_IN_EDITORAREA, { componentName: componentName }));
        };
        QingCore.prototype.LoadInConsolePanel = function (componentName) {
            this.Emit(new Event(exports.UIEvents.LOAD_IN_PANEL, { componentName: componentName }));
        };
        QingCore.prototype.LoadInWidgetBar = function (componentName) {
            this.Emit(new Event(exports.UIEvents.LOAD_IN_WIDGETBAR, { componentName: componentName }));
        };
        QingCore.prototype.RegistVariable = function (pluginName, varName, data) {
            var variables = this.pluginVariables.get(pluginName);
            if (typeof variables === "object" && variables.length > 0) {
                if (variables.indexOf(varName) < 0) {
                    this.registObserver(varName, data);
                }
            }
            else {
                this.pluginVariables.set(pluginName, [varName]);
                this.registObserver(varName, data);
            }
        };
        QingCore.prototype.GetVariable = function (varName) {
            return this.getObserver(varName);
        };
        /*******************************************************************************/
        /****************************** Storage Api *****************************/
        QingCore.prototype.Set = function (key, data) {
            if (typeof data === "object") {
                localStorage.setItem(key, JSON.stringify(data));
            }
            else {
                localStorage.setItem(key, data);
            }
        };
        QingCore.prototype.Get = function (key) {
            var data = localStorage.getItem(key);
            if (!data)
                return null;
            try {
                return JSON.parse(data);
            }
            catch (error) {
                return data;
            }
        };
        QingCore.prototype.Remove = function (key) {
            localStorage.removeItem(key);
        };
        /*******************************************************************************/
        /****************************** Event Listener Api *****************************/
        QingCore.prototype.Emit = function (event) {
            this.dispatchEvent(event);
        };
        QingCore.prototype.On = function (eventName, listener) {
            this.addEventListener(eventName, listener);
        };
        QingCore.prototype.Once = function (eventName, listener) {
            this.addOnceEventListener(eventName, listener);
        };
        QingCore.prototype.Off = function (eventName, listener) {
            this.removeListener(eventName, listener);
        };
        QingCore.prototype.OffAll = function () {
            this.removeAllEvents();
        };
        /*******************************************************************************/
        QingCore.prototype.Invoke = function (funcName) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return this.execFunction.apply(this, __spreadArrays([funcName], args));
        };
        QingCore.prototype.Bind = function (funcName, fn) {
            this.addFunction(funcName, fn);
        };
        QingCore.prototype.UnBind = function (funcName) {
            this.removeFunction(funcName);
        };
        /****************************** IO Api *****************************************/
        QingCore.prototype.ListDir = function (dir) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.LISTDIR, {
                    dir: dir,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.RemoveDir = function (dir) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.REMOVEDIR, { dir: dir })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.ReadFile = function (file) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.READFILE, {
                    file: file,
                    options: { encoding: "utf8" },
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.WriteFile = function (file, data) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.WRITEFILE, {
                    file: file,
                    data: data,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.RemoveFile = function (file, data) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.REMOVEFILE, {
                    file: file,
                    data: data,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.ReadJson = function (path) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.READJSON, {
                    path: path,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.WriteJson = function (path, data) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.WRITEJSON, {
                    path: path,
                    data: data,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.DownloadFile = function (url, output) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.DOWNLOADFILE, {
                    url: url,
                    output: output,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.UploadFile = function (file) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.UPLOADFILE, {
                    file: file,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.CopyFiles = function (source, dest) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.COPYFILES, {
                    source: source,
                    dest: dest
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.ZipFiles = function (files) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.ZIPFILES, {
                    files: files,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        QingCore.prototype.Unzip = function (file) {
            return new Promise(function (resolve, reject) {
                electronRe.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, exports.IOEvents.UNZIP, {
                    file: file,
                })
                    .then(function (res) {
                    var error = res.error, data = res.data;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        };
        Object.defineProperty(QingCore.prototype, "WebServiceSdk", {
            /*******************************************************************************/
            /****************************** Web Service Api *****************************************/
            get: function () {
                return QingWebApiSdk.getInstance();
            },
            enumerable: false,
            configurable: true
        });
        /*******************************************************************************/
        QingCore.prototype.Destroy = function () {
            var observers = Array.from(this.observerMap.values());
            observers.forEach(function (observer) {
                observer.next(null);
                observer.complete();
            });
            _super.prototype.removeAllListeners.call(this);
            this.OffAll();
        };
        var QingCore_1;
        QingCore.IoServiceName = "io-service";
        QingCore = QingCore_1 = __decorate([
            core.Injectable({
                providedIn: "root",
            }),
            __metadata("design:paramtypes", [])
        ], QingCore);
        return QingCore;
    }(PluginStore));

    var Plugin = /** @class */ (function () {
        function Plugin() {
        }
        Plugin.prototype.getPluginIdentify = function () {
            return this.name + "@" + this.version;
        };
        return Plugin;
    }());

    exports.Component = Component;
    exports.Event = Event;
    exports.Game = Game;
    exports.Plugin = Plugin;
    exports.QingCore = QingCore;
    exports.User = User;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
