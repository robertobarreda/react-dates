import React from 'react';

import DateRangePicker from '../src/components/DateRangePicker';

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
      startTime: '',
      endTime: ''
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onTimeChange({ startTime, endTime }) {
    this.setState({ startTime, endTime });
  }


  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate, startTime, endTime } = this.state;
    return (
      <div>
        <DateRangePicker
          {...this.props}
            keepOpenOnDateSelect
          onDatesChange={this.onDatesChange}
          onTimeChange={this.onTimeChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
          startTime={startTime}
          endTime={endTime}
        />
      </div>
    );
  }
}

export default DateRangePickerWrapper;
