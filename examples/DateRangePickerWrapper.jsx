import React from 'react';
import moment from 'moment';

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

    this.selectLastHour = this.selectLastHour.bind(this);
    this.selectLastWeek = this.selectLastWeek.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onTimeChange({ startTime, endTime }) {
    this.setState({ startTime, endTime });
  }

  /*TODO create separate component for predefined filters*/
  selectLastHour(){
    let end = moment(),
        start = moment().add(-1, 'h');
    const startTime = start.format('HH:mm'),
        endTime = end.format('HH:mm');
    this.setState({startDate: start, endDate: end});
    this.setState({startTime, endTime});
  }

  selectLastWeek(){
    let end = moment(),
        start = moment().add(-1, 'w');
    const startTime = start.format('HH:mm'),
        endTime = end.format('HH:mm');
    this.setState({startDate: start, endDate: end});
    this.setState({startTime, endTime});
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

        <button onClick={this.selectLastHour}>last hour</button>
        <button onClick={this.selectLastWeek}>last week</button>
        <br/>
        <div>
          this state: {typeof startDate} {typeof endDate} {typeof startTime} {typeof endTime}<br/>
          this state: {startDate ? startDate.toString(): ""} {endDate ? endDate.toString(): ""} {startTime} {endTime}
        </div>
      </div>
    );
  }
}

export default DateRangePickerWrapper;
