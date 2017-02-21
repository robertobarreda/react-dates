module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactFontawesome = __webpack_require__(44);

	var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var TimeInputSelector = function (_React$Component) {
	    _inherits(TimeInputSelector, _React$Component);

	    function TimeInputSelector(props) {
	        _classCallCheck(this, TimeInputSelector);

	        var _this = _possibleConstructorReturn(this, (TimeInputSelector.__proto__ || Object.getPrototypeOf(TimeInputSelector)).call(this, props));

	        _this.value = null;
	        _this.displayValue = null;
	        _this.step = 1;
	        _this.min = null;
	        _this.max = null;
	        _this.onValueChange = _this.props.onClick;

	        _this.incrementValue = _this.incrementValue.bind(_this);
	        _this.decrementValue = _this.decrementValue.bind(_this);
	        return _this;
	    }

	    _createClass(TimeInputSelector, [{
	        key: 'getDisplayValue',
	        value: function () {
	            function getDisplayValue(value) {
	                return this.fillWith0();
	            }

	            return getDisplayValue;
	        }()
	    }, {
	        key: 'fillWith0',
	        value: function () {
	            function fillWith0() {
	                if (this.value.toString().length == 1) {
	                    return '0' + this.value.toString();
	                }
	                return this.value;
	            }

	            return fillWith0;
	        }()
	    }, {
	        key: 'incrementValue',
	        value: function () {
	            function incrementValue() {
	                this.value = this.value + this.step;
	                this.onValueChange(this.value);
	            }

	            return incrementValue;
	        }()
	    }, {
	        key: 'decrementValue',
	        value: function () {
	            function decrementValue() {
	                this.value = this.value - this.step;
	                this.onValueChange(this.value);
	            }

	            return decrementValue;
	        }()
	    }, {
	        key: 'render',
	        value: function () {
	            function render() {
	                this.value = this.props.value;
	                this.displayValue = this.getDisplayValue();

	                if (this.props.step) {
	                    this.step = parseInt(this.props.step);
	                }
	                return _react2['default'].createElement('div', { className: 'time-selector' }, _react2['default'].createElement('button', { type: 'button',
	                    className: 'time-selector__btn',
	                    onClick: this.incrementValue }, _react2['default'].createElement(_reactFontawesome2['default'], { name: 'angle-up',
	                    className: 'btn-icon btn-icon--move-up' })), _react2['default'].createElement('input', { type: 'text',
	                    className: 'time-selector__input',
	                    value: this.displayValue,
	                    name: 'startTimeHours' }), _react2['default'].createElement('button', { type: 'button',
	                    className: 'time-selector__btn',
	                    onClick: this.decrementValue }, _react2['default'].createElement(_reactFontawesome2['default'], { name: 'angle-down',
	                    className: 'btn-icon btn-icon--move-down' })));
	            }

	            return render;
	        }()
	    }]);

	    return TimeInputSelector;
	}(_react2['default'].Component);

	exports['default'] = TimeInputSelector;

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 44:
/***/ function(module, exports) {

	module.exports = require("react-fontawesome");

/***/ }

/******/ });