/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Events-list/events-list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules.nosync/axios/index.js":
/*!********************************************!*\
  !*** ./node_modules.nosync/axios/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules.nosync/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules.nosync/axios/lib/adapters/xhr.js":
/*!*******************************************************!*\
  !*** ./node_modules.nosync/axios/lib/adapters/xhr.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules.nosync/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules.nosync/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules.nosync/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules.nosync/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules.nosync/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

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

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules.nosync/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
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
    if (config.withCredentials) {
      request.withCredentials = true;
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

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/axios.js":
/*!************************************************!*\
  !*** ./node_modules.nosync/axios/lib/axios.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules.nosync/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules.nosync/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules.nosync/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules.nosync/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules.nosync/axios/lib/defaults.js");

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
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules.nosync/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules.nosync/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules.nosync/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules.nosync/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules.nosync/axios/lib/cancel/Cancel.js":
/*!********************************************************!*\
  !*** ./node_modules.nosync/axios/lib/cancel/Cancel.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules.nosync/axios/lib/cancel/CancelToken.js":
/*!*************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/cancel/CancelToken.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules.nosync/axios/lib/cancel/Cancel.js");

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

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules.nosync/axios/lib/cancel/isCancel.js":
/*!**********************************************************!*\
  !*** ./node_modules.nosync/axios/lib/cancel/isCancel.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/Axios.js":
/*!*****************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/Axios.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules.nosync/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules.nosync/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules.nosync/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules.nosync/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
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
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

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

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/InterceptorManager.js":
/*!******************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/InterceptorManager.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");

function InterceptorManager() {
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
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
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
InterceptorManager.prototype.eject = function eject(id) {
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
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/createError.js":
/*!***********************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/createError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules.nosync/axios/lib/core/enhanceError.js");

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
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/dispatchRequest.js":
/*!***************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/dispatchRequest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules.nosync/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules.nosync/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules.nosync/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules.nosync/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules.nosync/axios/lib/helpers/combineURLs.js");

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
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

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


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/enhanceError.js":
/*!************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/enhanceError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
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


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/mergeConfig.js":
/*!***********************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/mergeConfig.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules.nosync/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/settle.js":
/*!******************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/settle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules.nosync/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/core/transformData.js":
/*!*************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/core/transformData.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/defaults.js":
/*!***************************************************!*\
  !*** ./node_modules.nosync/axios/lib/defaults.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules.nosync/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules.nosync/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules.nosync/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules.nosync/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
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

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules.nosync/process/browser.js")))

/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/bind.js":
/*!*******************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/bind.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/buildURL.js":
/*!***********************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/buildURL.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
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
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
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


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/combineURLs.js":
/*!**************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/combineURLs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/cookies.js":
/*!**********************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/cookies.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
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


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/isAbsoluteURL.js":
/*!****************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/isAbsoluteURL.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/isURLSameOrigin.js":
/*!******************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/isURLSameOrigin.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

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
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
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


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/normalizeHeaderName.js":
/*!**********************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/normalizeHeaderName.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules.nosync/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/parseHeaders.js":
/*!***************************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/parseHeaders.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules.nosync/axios/lib/utils.js");

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
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

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


/***/ }),

/***/ "./node_modules.nosync/axios/lib/helpers/spread.js":
/*!*********************************************************!*\
  !*** ./node_modules.nosync/axios/lib/helpers/spread.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules.nosync/axios/lib/utils.js":
/*!************************************************!*\
  !*** ./node_modules.nosync/axios/lib/utils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules.nosync/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules.nosync/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
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
function trim(str) {
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

  if (isArray(obj)) {
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
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
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
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
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
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules.nosync/axios/node_modules/is-buffer/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules.nosync/axios/node_modules/is-buffer/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules.nosync/process/browser.js":
/*!************************************************!*\
  !*** ./node_modules.nosync/process/browser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/Common/components/btnFloat.js":
/*!*******************************************!*\
  !*** ./src/Common/components/btnFloat.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const btnFLoat = document.querySelector('.btn-float')
const menuList = document.querySelector('.menu-list')

window.addEventListener('scroll', (ev)=>{
  if(window.scrollY>200) {
    btnFLoat.style.filter = 'blur(0)'
    btnFLoat.style.transform = 'scale(1)'
    btnFLoat.style.top = '30px'
  }else {
    btnFLoat.style.filter = 'blur(20px)'
    btnFLoat.style.transform = 'scale(0)'
    btnFLoat.style.top = '60px'
  }
})

btnFLoat.addEventListener('touchstart', () => {
  menuList.classList.toggle('menu-list--active', true)
})

/***/ }),

/***/ "./src/Common/components/nav.js":
/*!**************************************!*\
  !*** ./src/Common/components/nav.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 展开侧边sublist */
const aSublist = document.querySelectorAll('.menu-list__sublist')

aSublist.forEach((sublist)=>{
  const parentNode = sublist.parentNode
  const arrow = parentNode.querySelector('.arrow-down')
  parentNode.addEventListener('touchstart', function (){
    sublist.classList.toggle('menu-list__sublist--active')
    arrow.classList.toggle('arrow-down--inactive')
  })
})

/* 点击出发menu-mob */
const menuBtn = document.querySelector('button')
const menuList = document.querySelector('.menu-list')

menuBtn.addEventListener('touchend', ()=>{
  menuList.classList.toggle('menu-list--active', true)
})
document.addEventListener('touchstart', (ev)=>{
  const { clientX, clientY } = ev.touches[0]
  const { width } = menuList.getBoundingClientRect()
  if(clientX>width){
    menuList.classList.toggle('menu-list--active', false)
  }
})



/***/ }),

/***/ "./src/Events-list/events-list.js":
/*!****************************************!*\
  !*** ./src/Events-list/events-list.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_list_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events-list.html */ "./src/events-list.html");
/* harmony import */ var _events_list_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_events_list_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./src/Events-list/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/components/nav */ "./src/Common/components/nav.js");
/* harmony import */ var _Common_components_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Common_components_nav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/components/btnFloat */ "./src/Common/components/btnFloat.js");
/* harmony import */ var _Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Common_components_btnFloat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules.nosync/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






const oLoadMore = document.getElementById('loadmore')
const contentCards = document.querySelector('.content-cards')

oLoadMore.addEventListener('click', (ev)=>{
  ev.preventDefault()
  
  loadMore(APIMore + 
    ((/\?/).test(APIMore) ? `&page=${page}` : `?page=${page}`)
  )
})

let page = 0
function loadMore(url){
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url)
  .then(data=>{
    if(data.status !== 200) return
    page ++
    const { moreList, thelastone } = data.data
    if(thelastone == true) oLoadMore.style.display = 'none'
    moreList.forEach(list => {
      const html = `
        <a href="${list.url}" class="content-cards__item">
          <div class="content-cards__item-img">
            <figure style="background-image:url(${list.img})"></figure>
          </div>
          <div class="content-cards__item-content">
            <span>${list.date}</span>
            <h3>${list.h3}</h3>
            <p>${list.p}</p>
          </div>
          <div class="content-cards__item-info">
            <span>${list.span1}</span>
            <span>${list.span2}</span>
          </div>
        </a>
      `
      contentCards.innerHTML += html
    })
  })
}

/*------------------ 异步加载 ------------------*/
  // let loading = true
  // let page = 0
  // const contentCards = document.querySelector('.content-cards')
  // const oLoading = document.querySelector('.loading')

  // window.addEventListener('scroll', ()=>{
  //   return false
  //   const clientBottom = (window.innerHeight - contentCards.getBoundingClientRect().bottom)
  //   if (clientBottom > 300 && contentCards.offsetHeight > window.innerHeight / 2 && loading){
  //     loading = false
  //     oLoading.style.visibility = 'visible'
  //     loadMore(APIMore + `?page=${page}`)
  //   }
  // })

  // function loadMore(url) {
  //   axios.get(url)
  //   .then(data=>{
  //     if(data.status!==200) return
  //     page ++ // 每次触底page+1
  //     const { moreList } = data.data
  //     moreList.forEach((list)=>{
  //       const a = document.createElement('a')
  //       a.href = list.url
  //       a.className = 'content-cards__item'
  //       a.innerHTML = `
  //         <div class="content-cards__item-img">
  //           <figure style="background:url(${list.img})"></figure>
  //         </div>
  //         <div class="content-cards__item-content">
  //           <span>${list.date}</span>
  //           <h3>${list.h3}</h3>
  //           <p>${list.p}</p>
  //         </div>
  //         <div class="content-cards__item-info">
  //           <span>${list.span1}</span>
  //           <span>${list.span2}</span>
  //         </div>
  //       `
  //       contentCards.appendChild(a)
  //     })
  //     oLoading.style.visibility = 'hidden'
  //     loading = true
  //   })
  // }



/***/ }),

/***/ "./src/Events-list/scss/main.scss":
/*!****************************************!*\
  !*** ./src/Events-list/scss/main.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/events-list.html":
/*!******************************!*\
  !*** ./src/events-list.html ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <link rel=\"icon\" type=\"image/png\" href=\"https://i.postimg.cc/ryf98PTw/favicon.png\">\n  <title>CGHK - Upcoming | Events</title>\n</head>\n<body>\n  <!-- Nav -->\n  <header class=\"header\">\n    <div class=\"nav\">\n      <div class=\"nav__wrapper\">\n        <a href=\"index.html\" class=\"nav__logo\"></a>\n        <div class=\"nav-links\">\n          <nav class=\"nav-links-one\">\n            <a href=\"private-policy.html\" class=\"nav-links-one__item\">Private Policy</a>\n            <a href=\"contact.html\" class=\"nav-links-one__item\">Contact Us</a>\n            <a href=\"media.html\" class=\"nav-links-one__item\">Media</a>\n            <a href=\"donate.html\" class=\"nav-links-one__item\">Donate</a>\n            <div class=\"language\">\n              <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n              <ul href=\"\" class=\"language__item\">\n                <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\"\n                alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a>\n          </li>\n              </ul>\n            </div>\n          </nav>\n          <nav class=\"nav-links-two\">\n            <div class=\"nav-links-two__item\">\n              <a href=\"about-CGHK.html\">About CGHK<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"about.html\">About</a></li>\n                <li><a href=\"about-CGHK.html\">Message of President</a></li>\n                <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n                <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n                <li><a href=\"about-parners.html\">Partners</a></li>\n                <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n                <li><a href=\"contact.html\">Contact Us</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"perspective.html?tab=Take on top news\">CGHK's Perspective<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n                <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n                <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"events.html\">Events<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"service.html\">Service<i class=\"icon arrow-down\"></i></a>\n              <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n              </ul>\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"publication.html\">Publication</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"service.html\">E-Newsletter</a></li>\n                <li><a href=\"service.html\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n            <div class=\"nav-links-two__item\">\n              <a href=\"membership.html\">Membership</a>\n              <!-- <ul class=\"nav-links-two__subnav\">\n                <li><a href=\"\">E-Newsletter</a></li>\n                <li><a href=\"\">Policy and Market Research</a></li>\n              </ul> -->\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <!-- 手机版nav -->\n    <div class=\"nav-mob\">\n      <a href=\"index.html\" class=\"nav-mob__logo\"><img src=\"" + __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg") + "\" alt=\"\"></a>\n      <div class=\"language\">\n        <img class=\"language__selected\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\">\n        <ul href=\"\" class=\"language__item\">\n          <li class=\"language__en\"><a href=\"\"><img title=\"English\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-en.svg */ "./src/images/language-en.svg") + "\" alt=\"\"></a></li>\n          <li class=\"language__zh\"><a href=\"\"><img title=\"中文\" width=\"13px\" src=\"" + __webpack_require__(/*! ./images/language-zh.svg */ "./src/images/language-zh.svg") + "\" alt=\"\"></a></li>\n        </ul>\n      </div>\n      <div class=\"menu\">\n        <button class=\"btn-stroke\"><i class=\"icon hamb\"></i> Menu</button>\n        <ul class=\"menu-list\">\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">About CGHK <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"about.html\">About</a></li>\n              <li><a href=\"about-CGHK.html\">Message of President</a></li>\n              <li><a href=\"about-committee.html\">Advisory Committee</a></li>\n              <li><a href=\"about-experts.html\">Commentators & Experts</a></li>\n              <li><a href=\"about-parners.html\">Partners</a></li>\n              <li><a href=\"about-interships.html\">Staff and Interships</a></li>\n              <li><a href=\"contact.html\">Contact Us</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">CGHK's Perspective <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"perspective.html?tab=Take on top news\">Take on top news</a></li>\n              <li><a href=\"perspective.html?tab=Podcast\">Podcast</a></li>\n              <li><a href=\"perspective.html?tab=Discussion and Debate\">Discussion and Debate</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Events <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"events-list.html?list=coming\">Upcoming Events</a></li>\n                <li><a href=\"events-list.html?list=past\">Past Events</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\">\n            <div class=\"flex-between\">Service <i class=\"icon arrow-down arrow-down--inactive\"></i></div>\n            <ul class=\"menu-list__sublist\">\n              <li><a href=\"service.html\">E-Newsletter</a></li>\n              <li><a href=\"service-research.html\">Policy and Market Research</a></li>\n            </ul>\n          </li>\n          <li class=\"menu-list__item\"><a href=\"publication.html\">Publication</a></li>\n          <li class=\"menu-list__item\"><a href=\"membership.html\">Membership</a></li>\n          <hr class=\"divider\">\n          <li class=\"menu-list__item\"><a href=\"private-policy.html\">Private Policy</a></li>\n          <li class=\"menu-list__item\"><a href=\"contact.html\">Contact Us</a></li>\n          <li class=\"menu-list__item\"><a href=\"media.html\">Media</a></li>\n          <li class=\"menu-list__item\"><a href=\"donate.html\">Donate</a></li>\n        </ul>\n        <!-- Btn-Float -->\n        <button class=\"btn-float\"><i class=\"icon hamb\"></i></button>\n      </div>\n    </div>\n  </header>\n  <!-- Body -->\n  <article class=\"body\">\n    <!-- Aside -->\n    <aside class=\"aside\">\n      <nav class=\"aside-bread\">\n        <a href=\"index.html\" class=\"aside-bread__link\">Home</a>\n        <a href=\"events.html\" class=\"aside-bread__link\">Events</a>\n        <a href=\"\" class=\"aside-bread__link\">Upcoming Events</a>\n      </nav>\n    </aside>\n    <!-- Content -->\n    <div class=\"content\">\n      <!-- Title -->\n      <h1 class=\"title content__title\"><img src=\"" + __webpack_require__(/*! ./images/dots-2.svg */ "./src/images/dots-2.svg") + "\" alt=\"\">Upcoming Events</h1>\n      \n      <div class=\"content-cards\">\n        \n        <div class=\"content-cards__top\">\n          <div class=\"content-cards__left\">\n            <figure></figure>\n            <div class=\"content-cards__left-content\">\n              <h2>Jun 28 <span>12:00pm - 1:00pm</span></h2>\n              <a href=\"\">\n                <p>Will We Ban “Hate Speech”? Lessons from Europe and the Threat of Big Tech</p>\n              </a>\n              <div class=\"flex-between\">\n                <a href=\"events-link.html\"><img src=\"" + __webpack_require__(/*! ./images/arrow-lg.svg */ "./src/images/arrow-lg.svg") + "\" alt=\"\"></a>\n                <span>Hong Kong</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"content-cards__right\">\n            <figure></figure>\n            <div class=\"content-cards__right-content\">\n              <h2>Jun 06 <span>12:00pm - 1:00pm</span></h2>\n              <a href=\"events-link.html\">\n                <p>Will We Ban “Hate Speech”? Lessons from Europe and the</p>\n              </a>\n              <div class=\"flex-between\">\n                <span></span>\n                <span>Washington, DC</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n        <a href=\"\" class=\"content-cards__item\">\n          <div class=\"content-cards__item-img\">\n            <figure></figure>\n          </div>\n          <div class=\"content-cards__item-content\">\n            <span>Jun 28, 2019</span>\n            <h3>Examining Healthcare</h3>\n            <p>America has few “full service” think tanks for a very simple reason: It’s not easy to assemble and\n              develop talent in a wide range of disciplines.</p>\n          </div>\n          <div class=\"content-cards__item-info\">\n            <span>Washington, DC\n              Live Streamed</span>\n            <span>Keynote Speaker\n              Richard Vedder</span>\n          </div>\n        </a>\n      </div>\n      <div id=\"loadmore\" class=\"content-cards__viewall\">\n        <a class=\"btn-stroke\" href=\"\">Load More</a>\n      </div>\n\n      <div class=\"loading\">\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </div>\n  </article>\n  <!-- Footer -->\n  <footer class=\"footer\">\n    Copyrights © 2019 CGHK All Rights Reserved.\n  </footer>\n\n  <script>\n  /*------------------ API 数据接口 ------------------*/\n  const [APIMore] = [\n    '/api/events/getMore.json?list=upcoming'\n  ]\n\n  // 如果是past列表获取下面的api\n\n  // const [APIMore] = [\n  //   '/api/events/getMore.json?list=past'\n  // ]\n  </script>\n</body>\n</html>";

/***/ }),

/***/ "./src/images/arrow-lg.svg":
/*!*********************************!*\
  !*** ./src/images/arrow-lg.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/df73f51cefe569f2d25eb7dff831ac8e.svg";

/***/ }),

/***/ "./src/images/dots-2.svg":
/*!*******************************!*\
  !*** ./src/images/dots-2.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cdbd071073466ad55a79c381fccfa0db.svg";

/***/ }),

/***/ "./src/images/language-en.svg":
/*!************************************!*\
  !*** ./src/images/language-en.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/43caf8cea1ed6ff67f6f33078415e9d9.svg";

/***/ }),

/***/ "./src/images/language-zh.svg":
/*!************************************!*\
  !*** ./src/images/language-zh.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9fea14d987f943eb8863b933fd14b7d1.svg";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5a2b37e3ad53de87bd3eb9df3587bf0b.svg";

/***/ })

/******/ });
//# sourceMappingURL=events-list.bundle.js.map