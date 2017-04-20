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

	var _TimePicker = __webpack_require__(46);

	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

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

	var TimeRangeController = function (_React$Component) {
	    _inherits(TimeRangeController, _React$Component);

	    function TimeRangeController(props) {
	        _classCallCheck(this, TimeRangeController);

	        var _this = _possibleConstructorReturn(this, (TimeRangeController.__proto__ || Object.getPrototypeOf(TimeRangeController)).call(this, props));

	        _this.onStartTimeChange = _this.onStartTimeChange.bind(_this);
	        _this.onEndTimeChange = _this.onEndTimeChange.bind(_this);
	        return _this;
	    }

	    _createClass(TimeRangeController, [{
	        key: 'onStartTimeChange',
	        value: function () {
	            function onStartTimeChange(time) {
	                var endDate = this.props.endDate;

	                if (endDate && endDate.isSameOrBefore(time)) {
	                    endDate = (0, _moment2['default'])(time).add(this.props.step, 'm');
	                }
	                this.props.onDatesChange({ startDate: time, endDate: endDate });
	            }

	            return onStartTimeChange;
	        }()
	    }, {
	        key: 'onEndTimeChange',
	        value: function () {
	            function onEndTimeChange(time) {
	                var startDate = this.props.startDate;

	                this.props.onDatesChange({ startDate: startDate, endDate: time });
	            }

	            return onEndTimeChange;
	        }()
	    }, {
	        key: 'render',
	        value: function () {
	            function render() {
	                var _props = this.props;
	                var startDate = _props.startDate;
	                var endDate = _props.endDate;
	                var timeNotValid = _props.timeNotValid;
	                var step = _props.step;

	                return _react2['default'].createElement('div', { className: 'time-picker__container' }, _react2['default'].createElement(_TimePicker2['default'], {
	                    disabled: !startDate,
	                    label: 'Start time',
	                    datetime: startDate,
	                    onTimeChange: this.onStartTimeChange,
	                    step: step
	                }), _react2['default'].createElement(_TimePicker2['default'], {
	                    timeNotValid: timeNotValid,
	                    disabled: !endDate,
	                    datetime: endDate,
	                    label: 'End time',
	                    onTimeChange: this.onEndTimeChange,
	                    step: step
	                }));
	            }

	            return render;
	        }()
	    }]);

	    return TimeRangeController;
	}(_react2['default'].Component);

	exports['default'] = TimeRangeController;

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = require("./TimePicker");

/***/ }

/******/ });