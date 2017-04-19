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
      timeNotValid: false
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);

    this.selectLastHour = this.selectLastHour.bind(this);
    this.selectLastWeek = this.selectLastWeek.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
    //validation
    this.setState({timeNotValid: startDate.isSameOrAfter(endDate)});
  }


  /*TODO create separate component for predefined filters*/
  selectLastHour(){
    let end = moment().seconds(0).millisecond(0),
        start = moment().add(-1, 'h').seconds(0).millisecond(0);
    this.onDatesChange({startDate: start, endDate: end});
  }

  selectLastWeek(){
    let end = moment().seconds(0).millisecond(0),
        start = moment().add(-1, 'w').seconds(0).millisecond(0);
    this.onDatesChange({startDate: start, endDate: end});
  }


  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {
    const { focusedInput, startDate, endDate} = this.state;
    const onOutsideClick = function(){
      console.log('Hello form outside')
      console.log(startDate);
      console.log(endDate);
    }
    return (
      <div>
        this.state.timeNotValid {this.state.timeNotValid.toString()} <br />

        <DateRangePicker
          {...this.props}
            timeNotValid={this.state.timeNotValid}
            keepOpenOnDateSelect
            timeStep="10"
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
            onOutsideClick={onOutsideClick}
        />

        <button onClick={this.selectLastHour}>last hour</button>
        <button onClick={this.selectLastWeek}>last week</button>
        <br/>
        <div className={"time-not-valid " + (this.state.timeNotValid ? "show": "hide")}>Validation message</div>
        <div>
          this state: {startDate ? startDate.toString(): ""} {endDate ? endDate.toString(): ""}
        </div>
      </div>
    );
  }
}

export default DateRangePickerWrapper;
