import React, { PropTypes } from 'react';
import TimePicker from './TimePicker';

export default class TimeRangeController extends React.Component {

    constructor(props) {
        super(props);

        this.onStartTimeChange = this.onStartTimeChange.bind(this);
        this.onEndTimeChange = this.onEndTimeChange.bind(this);
    }

    componentDidMount(){
        let { startTime, endTime } = this.props;
        let newStartTime = startTime ? startTime : '00:00',
        newEndTime = endTime ? endTime: '00:00';
        this.props.onTimeChange({startTime: newStartTime, endTime: newEndTime});
    }

    onStartTimeChange(time){
        let  { endTime, endTime2, startTime2 }  = this.props,
          startTime  = time;
        this.props.onTimeChange({ startTime, endTime });

        /*let startDate = startTime2.hours(time.substr(0,2));
        startDate.minutes(time.substr(3,2));

        console.log('FROM onStartTimeChange 2', startDate);
        console.log('FROM onStartTimeChange 2 time.split(0,2)', time.substr(3,2));*/
        //this.props.onTimeChange2({ startDate: startDate, endDate: endTime2 });
    }

    onEndTimeChange(time){
        let { startTime } = this.props,
          endTime  = time;
        this.props.onTimeChange({ startTime, endTime });
    }

    render() {
        const { startTime, endTime } = this.props;
        return (
            <form style={{ display: 'flex'}}>
                <TimePicker
                    label="Start time"
                    time={this.props.startTime}
                    onTimeChange={this.onStartTimeChange}
                />
                <TimePicker
                    label="End time"
                    time={this.props.endTime}
                    onTimeChange={this.onEndTimeChange}
                />
            </form>
        );
    }
}
