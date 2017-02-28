import React, { PropTypes } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class TimeInputSelector extends React.Component {

    constructor(props) {
        super(props);
        this.value = null;
        this.step = 1;
        this.onValueChange = this.props.onClick;

        this.incrementValue = this.incrementValue.bind(this);
        this.decrementValue = this.decrementValue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    incrementValue(){
        //reset if value not sharp
        if(this.isValueSharpAccordingToStep(this.value)){
            const amount =  parseInt(value / this.step),
                sharpValue = amount * this.step
            this.value = sharpValue + this.step
        }else{
            this.value = this.value + this.step
        }
        this.onValueChange(this.value)
    }
    decrementValue(){
        //reset if value not sharp
        if(this.isValueSharpAccordingToStep(this.value)){
            const amount =  parseInt(this.value / this.step) + 1,
                sharpValue = amount * this.step
            this.value = sharpValue - this.step
        }else{
            this.value = this.value - this.step
        }
        this.onValueChange(this.value)
    }
    isValueSharpAccordingToStep(value){
        return this.step != 1 && value % this.step != 0
    }

    handleInputChange(event){
        const minNum = parseInt(this.props.min)
        const maxNum = parseInt(this.props.max)
        const value = event.target.value

        //check if it's corrected number in a range
        if((!isNaN(value) && value >= minNum && value <= maxNum ) || value == ''){
            this.onValueChange(event.target.value)
        } //else update will be prevented
    }


    render() {
        this.value = this.props.value;

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
                       onChange={this.handleInputChange}
                       value={this.props.value}
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
