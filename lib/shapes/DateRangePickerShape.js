Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _FocusedInputShape = require('../shapes/FocusedInputShape');

var _FocusedInputShape2 = _interopRequireDefault(_FocusedInputShape);

var _OrientationShape = require('../shapes/OrientationShape');

var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

var _AnchorDirectionShape = require('../shapes/AnchorDirectionShape');

var _AnchorDirectionShape2 = _interopRequireDefault(_AnchorDirectionShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  startDate: _reactMomentProptypes2['default'].momentObj,
  endDate: _reactMomentProptypes2['default'].momentObj,
  focusedInput: _FocusedInputShape2['default'],
  screenReaderInputMessage: _propTypes2['default'].string,
  minimumNights: _propTypes2['default'].number,
  isDayBlocked: _propTypes2['default'].func,
  isOutsideRange: _propTypes2['default'].func,
  enableOutsideDays: _propTypes2['default'].bool,
  reopenPickerOnClearDates: _propTypes2['default'].bool,
  keepOpenOnDateSelect: _propTypes2['default'].bool,
  numberOfMonths: _propTypes2['default'].number,
  showClearDates: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  required: _propTypes2['default'].bool,
  showDefaultInputIcon: _propTypes2['default'].bool,

  orientation: _OrientationShape2['default'],
  anchorDirection: _AnchorDirectionShape2['default'],
  horizontalMargin: _propTypes2['default'].number,
  // portal options
  withPortal: _propTypes2['default'].bool,
  withFullScreenPortal: _propTypes2['default'].bool,

  startDateId: _propTypes2['default'].string,
  startDatePlaceholderText: _propTypes2['default'].string,
  endDateId: _propTypes2['default'].string,
  endDatePlaceholderText: _propTypes2['default'].string,

  initialVisibleMonth: _propTypes2['default'].func,
  onDatesChange: _propTypes2['default'].func,
  onFocusChange: _propTypes2['default'].func,
  onPrevMonthClick: _propTypes2['default'].func,
  onNextMonthClick: _propTypes2['default'].func,

  // i18n
  displayFormat: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].func]),
  monthFormat: _propTypes2['default'].string,
  phrases: _propTypes2['default'].shape({
    closeDatePicker: _propTypes2['default'].node,
    clearDates: _propTypes2['default'].node
  })
};