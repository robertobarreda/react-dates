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

    getMomentObjectFromTimeString(timeString){
        return moment(timeString, 'HH:mm');
    }

    getStringFromMoment(momentObj){
        return momentObj.format('HH:mm');
    }

    onHourChange(value){
        if(!this.time){
            this.time = moment();
        }
        this.time.hours(value);
        let time = this.getStringFromMoment(this.time);
        this.props.onTimeChange(time);
    }

    onMinutesChange(value){
        this.time.minutes(value);
        let time = this.getStringFromMoment(this.time);
        this.onTimeChange(time);
    }

    getMinutesFromTime(){
        moment().hour()
    }

    render() {
        const { label } = this.props;
        this.time = this.getMomentObjectFromTimeString(this.props.time);
        this.hours = this.time.hours();
        this.minutes = this.time.minutes();
        return (
            <div className="time-picker">
                <span className="time-picker__label time-picker--align-middle">
                    {label}</span>
                <TimeInputSelector
                    value={this.hours}
                    min="0"
                    max="23"
                    onClick={this.onHourChange}/>
                <div className="time-picker--align-middle">:</div>
                <TimeInputSelector
                    value={this.minutes}
                    step="30"
                    min="0"
                    max="59"
                    onClick={this.onMinutesChange}/>
            </div>
        );
    }
}
