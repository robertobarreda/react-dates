import React, { PropTypes } from 'react';
import TimePicker from './TimePicker';

export default class TimeRangeController extends React.Component {

    constructor(props) {
        super(props);

        this.onStartTimeChange = this.onStartTimeChange.bind(this);
        this.onEndTimeChange = this.onEndTimeChange.bind(this);
    }

    onStartTimeChange(time){
        let  { endDate }  = this.props;
        this.props.onDatesChange({startDate: time, endDate});
    }

    onEndTimeChange(time){
        let { startDate } = this.props;
        this.props.onDatesChange({startDate, endDate: time});
    }

    render() {
        const {startDate, endDate, timeNotValid, step } = this.props;
        return (
            <div className="time-picker__container">
                <TimePicker
                    disabled={!startDate}
                    label="Start time"
                    datetime={startDate}
                    onTimeChange={this.onStartTimeChange}
                    step={step}
                />
                <TimePicker
                    timeNotValid={timeNotValid}
                    disabled={!endDate}
                    datetime={endDate}
                    label="End time"
                    onTimeChange={this.onEndTimeChange}
                    step={step}
                />
            </div>
        );
    }
}
