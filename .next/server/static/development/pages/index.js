module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _movie_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie.css */ "./pages/movie.css");
/* harmony import */ var _movie_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_movie_css__WEBPACK_IMPORTED_MODULE_4__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Ticket =
/*#__PURE__*/
function (_Component) {
  _inherits(Ticket, _Component);

  function Ticket() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Ticket);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Ticket)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      seats: _this.props.seats,
      subscribe: false,
      subscribed: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "subscribe", function () {
      if (_this.state.subscribe && !_this.state.subscribed) {
        _this.props.socket.on('reserve', _this.handleSeat);

        _this.setState({
          subscribed: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSeat", function (seats) {
      var stateData = _this.state.seats.concat();

      stateData[seats.itemY][seats.itemX] = 2;

      _this.setState(function (state) {
        return {
          seats: stateData
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      event.preventDefault();
      var itemX = event.target.dataset.index;
      var itemY = event.target.parentNode.dataset.index;

      var seats = _this.state.seats.concat();

      var seat = {
        dummy: new Date().getTime(),
        itemX: itemX,
        itemY: itemY
      };
      console.log(seat);

      if (confirm("".concat(parseInt(seat.itemY) + 1, "\uC5F4 ").concat(parseInt(seat.itemX) + 1, "\uC88C\uC11D\uC744 \uC608\uC57D\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))) {
        seats[itemY][itemX] = 2;

        _this.setState(function (state) {
          return {
            seats: seats
          };
        });

        _this.props.socket.emit('reserve', seat);
      } else {
        alert('취소되었습니다.');
      }
    });

    return _this;
  }

  _createClass(Ticket, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.subscribe();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.subscribe();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.socket.off('reserve', this.handleSeat);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.frontwrap
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.front
      }, "SCREEN")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.seats
      }, this.state.seats.map(function (itemY, index) {
        if (itemY) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            key: index,
            className: _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.line,
            "data-index": index
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.seat
          }, index + 1), itemY.map(function (itemX, index) {
            if (itemX === 1) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                key: index,
                className: [_movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.seat, _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.enable].join(' '),
                "data-index": index,
                onClick: _this2.handleClick
              });
            } else if (itemX === 2) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                key: index,
                className: [_movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.seat, _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.disable].join(' ')
              });
            } else {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                key: index,
                className: _movie_css__WEBPACK_IMPORTED_MODULE_4___default.a.seat
              });
            }
          }));
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, response, seats;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:3000/seats');

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                seats = _context.sent;
                return _context.abrupt("return", {
                  seats: seats
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.socket && !state.subscribe) return {
        subscribe: true
      };
      return null;
    }
  }]);

  return Ticket;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(Ticket, "defaultProps", {
  seats: []
});

/* harmony default export */ __webpack_exports__["default"] = (Ticket);

/***/ }),

/***/ "./pages/movie.css":
/*!*************************!*\
  !*** ./pages/movie.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"frontwrap": "_3MmWFuSFuU9yR0-xSfikLo",
	"front": "_1NnJTjLFPnraOTdr4rXBsO",
	"seats": "_1GBVXXHipS7GwhK2p52TlT",
	"line": "BtVK9I49DDyESpq0386-w",
	"seat": "_3BpQn3QNT7Kgs0Y3ylU0md",
	"enable": "_25l36j7rSHvdNje_woNYbi",
	"disable": "_1oVCtJNv_EYU3CTkUjTBfj"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map