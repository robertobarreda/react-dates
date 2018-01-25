Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _OrientationShape = require('../shapes/OrientationShape');

var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

var _AnchorDirectionShape = require('../shapes/AnchorDirectionShape');

var _AnchorDirectionShape2 = _interopRequireDefault(_AnchorDirectionShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  id: _propTypes2['default'].string.isRequired,
  placeholder: _propTypes2['default'].string,
  date: _reactMomentProptypes2['default'].momentObj,
  focused: _propTypes2['default'].bool,
  showClearDate: _propTypes2['default'].bool,
  reopenPickerOnClearDates: _propTypes2['default'].bool,
  keepOpenOnDateSelect: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  screenReaderInputMessage: _propTypes2['default'].string,

  onDateChange: _propTypes2['default'].func,
  onFocusChange: _propTypes2['default'].func,

  isDayBlocked: _propTypes2['default'].func,
  isOutsideRange: _propTypes2['default'].func,
  enableOutsideDays: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  orientation: _OrientationShape2['default'],
  initialVisibleMonth: _propTypes2['default'].func,
  anchorDirection: _AnchorDirectionShape2['default'],
  horizontalMargin: _propTypes2['default'].number,

  navPrev: _propTypes2['default'].node,
  navNext: _propTypes2['default'].node,

  // portal options
  withPortal: _propTypes2['default'].bool,
  withFullScreenPortal: _propTypes2['default'].bool,

  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,

  // i18n
  displayFormat: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape({
    closeDatePicker: _propTypes2['default'].node
  })
};