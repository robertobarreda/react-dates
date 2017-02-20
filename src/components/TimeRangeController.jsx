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
        const {startDate, endDate } = this.props;
        return (
            <form style={{ display: 'flex'}}>
                <TimePicker
                    disabled={!startDate}
                    label="Start time"
                    datetime={startDate}
                    onTimeChange={this.onStartTimeChange}
                />
                <TimePicker
                    disabled={!endDate}
                    datetime={endDate}
                    label="End time"
                    onTimeChange={this.onEndTimeChange}
                />
            </form>
        );
    }
}
