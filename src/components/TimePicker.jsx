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

    fillWith0(value){
        if(value.toString().length == 1){
            return '0' + value.toString();
        }
        return value;
    }

    render() {
        const { label, disabled, datetime, timeNotValid, step } = this.props;
        this.time = datetime;
        this.hours = datetime ? this.fillWith0(datetime.hours()): "";
        this.minutes = datetime ? this.fillWith0(datetime.minutes()): "";
        return (
            <div className={"time-picker " + (disabled ? "disabled": "") +
                (timeNotValid ? "time-not-valid": "")}>

                <span className="time-picker__label time-picker--align-middle">
                    {label}</span>
                <TimeInputSelector
                    value={this.hours}
                    onTimeInputChange={this.props.onTimeChange}
                    min="0"
                    max="23"
                    onClick={this.onHourChange}/>
                <div className="time-picker--align-middle">:</div>
                <TimeInputSelector
                    value={this.minutes}
                    step={step}
                    min="0"
                    max="59"
                    onTimeInputChange={this.props.onTimeChange}
                    onClick={this.onMinutesChange}/>
            </div>
        );
    }
}
