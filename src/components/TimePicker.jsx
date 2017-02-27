import React, { PropTypes } from 'react';
import moment from 'moment';
import TimeInputSelector from './TimeInputSelector';

export default class TimePicker extends React.Component {

    constructor(props) {
        super(props);
        this.time = null;
        this.hours = null;
        this.minutes = null;
        this.onTimeChange = this.props.onTimeChange;

        this.onHourChange = this.onHourChange.bind(this);
        this.onMinutesChange = this.onMinutesChange.bind(this);
    }

    onHourChange(value){
        this.time.hours(value);
        this.props.onTimeChange(this.time);
    }

    onMinutesChange(value){
        this.time.minutes(value);
        this.props.onTimeChange(this.time);
    }

    render() {
        const { label, disabled, datetime, timeNotValid } = this.props;
        this.time = datetime;
        this.hours = datetime ? datetime.hours(): "";
        this.minutes = datetime ? datetime.minutes(): "";

        return (
            <div className={"time-picker " + (disabled ? "disabled": "") +
                (timeNotValid ? "time-not-valid": "")}>

                <span className="time-picker__label time-picker--align-middle">
                    {label}</span>
                <TimeInputSelector
                    value={this.hours}
                    onClick={this.onHourChange}/>
                <div className="time-picker--align-middle">:</div>
                <TimeInputSelector
                    value={this.minutes}
                    step="30"
                    onClick={this.onMinutesChange}/>
            </div>
        );
    }
}
