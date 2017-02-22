import React, { PropTypes } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class TimeInputSelector extends React.Component {

    constructor(props) {
        super(props);
        this.value = null;
        this.displayValue = null;
        this.step = 1;
        this.min = null;
        this.max = null;
        this.onValueChange = this.props.onClick;

        this.incrementValue =this.incrementValue.bind(this);
        this.decrementValue =this.decrementValue.bind(this);
    }

    getDisplayValue(value){
        return this.fillWith0();
    }
    fillWith0(){
        if(this.value.toString().length == 1){
            return '0' + this.value.toString();
        }
        return this.value;
    }

    incrementValue(){
        this.value = this.value + this.step;
        this.onValueChange(this.value);
    }
    decrementValue(){
        this.value = this.value - this.step;
        this.onValueChange(this.value);
    }

    render() {
        this.value = this.props.value;
        this.displayValue = this.getDisplayValue();

        if(this.props.step){
            this.step = parseInt(this.props.step);
        }
        return (
            <div className="time-selector">
                <button type="button"
                        className="time-selector__btn"
                        onClick={this.incrementValue}>
                    <FontIcon iconClassName="mdi mdi-chevron-up"
                              className="btn-icon btn-icon--move-up"/>
                </button>
                <input type="text"
                       className="time-selector__input"
                       value={this.displayValue}
                       name="startTimeHours"/>
                <button type="button"
                        className="time-selector__btn"
                        onClick={this.decrementValue}>
                    <FontIcon iconClassName="mdi mdi-chevron-down"
                              className="btn-icon btn-icon--move-down"/>
                </button>
            </div>
        );
    }
}
