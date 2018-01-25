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
/***/ (function(module, exports, __webpack_require__) {

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

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _moment = __webpack_require__(5);

	var _moment2 = _interopRequireDefault(_moment);

	var _TimeInputSelector = __webpack_require__(46);

	var _TimeInputSelector2 = _interopRequireDefault(_TimeInputSelector);

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

	var TimePicker = function (_React$Component) {
	    _inherits(TimePicker, _React$Component);

	    function TimePicker(props) {
	        _classCallCheck(this, TimePicker);

	        var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props));

	        _this.time = null;
	        _this.hours = null;
	        _this.minutes = null;
	        _this.onTimeChange = _this.props.onTimeChange;

	        _this.onHourChange = _this.onHourChange.bind(_this);
	        _this.onMinutesChange = _this.onMinutesChange.bind(_this);
	        return _this;
	    }

	    _createClass(TimePicker, [{
	        key: 'onHourChange',
	        value: function () {
	            function onHourChange(value) {
	                this.time.hours(value);
	                this.props.onTimeChange(this.time);
	            }

	            return onHourChange;
	        }()
	    }, {
	        key: 'onMinutesChange',
	        value: function () {
	            function onMinutesChange(value) {
	                this.time.minutes(value);
	                this.props.onTimeChange(this.time);
	            }

	            return onMinutesChange;
	        }()
	    }, {
	        key: 'fillWith0',
	        value: function () {
	            function fillWith0(value) {
	                if (value.toString().length == 1) {
	                    return '0' + value.toString();
	                }
	                return value;
	            }

	            return fillWith0;
	        }()
	    }, {
	        key: 'render',
	        value: function () {
	            function render() {
	                var _props = this.props,
	                    label = _props.label,
	                    disabled = _props.disabled,
	                    datetime = _props.datetime,
	                    timeNotValid = _props.timeNotValid,
	                    step = _props.step;

	                this.time = datetime;
	                this.hours = datetime ? this.fillWith0(datetime.hours()) : "";
	                this.minutes = datetime ? this.fillWith0(datetime.minutes()) : "";
	                return _react2['default'].createElement('div', { className: "time-picker " + (disabled ? "disabled" : "") + (timeNotValid ? "time-not-valid" : "") }, _react2['default'].createElement('span', { className: 'time-picker__label time-picker--align-middle' }, label), _react2['default'].createElement(_TimeInputSelector2['default'], {
	                    value: this.hours,
	                    onTimeInputChange: this.props.onTimeChange,
	                    min: '0',
	                    max: '23',
	                    onClick: this.onHourChange }), _react2['default'].createElement('div', { className: 'time-picker--align-middle' }, ':'), _react2['default'].createElement(_TimeInputSelector2['default'], {
	                    value: this.minutes,
	                    step: step,
	                    min: '0',
	                    max: '59',
	                    onTimeInputChange: this.props.onTimeChange,
	                    onClick: this.onMinutesChange }));
	            }

	            return render;
	        }()
	    }]);

	    return TimePicker;
	}(_react2['default'].Component);

	exports['default'] = TimePicker;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = require("moment");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

	module.exports = require("./TimeInputSelector");

/***/ })

/******/ });