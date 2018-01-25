import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'react-md/lib/FontIcons';

export default class TimeInputSelector extends React.Component {

    constructor(props) {
        super(props);
        this.value = null;
        this.step = this.props.step ? parseInt(this.props.step) : 1;
        this.onValueChange = this.props.onClick;

        this.minNum = parseInt(this.props.min)
        this.maxNum = parseInt(this.props.max)
        this.incrementBtnDisabled = false;
        this.decrementBtnDisabled = false;

        this.incrementValue = this.incrementValue.bind(this);
        this.decrementValue = this.decrementValue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    incrementValue(){
        if(this.getNextValue(this.value) > this.maxNum){//increasing reach max number

            this.value = this.value + this.getValueToAdd(this.value)

        }else if(this.isValueSharpAccordingToStep(this.value)){//reset if value not sharp

            const amount =  parseInt(this.value / this.step)
            this.value = this.getSharpValue(amount) + this.step

        }else{
            this.value = this.value + this.step
        }

        this.onValueChange(this.value)

    }
    decrementValue(){
        if(this.getPreviousValue(this.value) < this.minNum){//decreasing below min number

            this.value = this.value - this.getValueToSubtract(this.value);

        }else if(this.isValueSharpAccordingToStep(this.value)){//reset if value not sharp

            const amount =  parseInt(this.value / this.step) + 1
            this.value = this.getSharpValue(amount) - this.step

        }else{
            this.value = this.value - this.step
        }

        this.onValueChange(this.value)
    }

    handleInputChange(event){
        const value = event.target.value
        if(this.isValueCorrectAndInRange(value)){
            this.onValueChange(value)
        } //else update will be prevented
    }

    /* helpers */
    isValueSharpAccordingToStep(value){
        return this.step != 1 && value % this.step != 0
    }
    getSharpValue(amount){
        return amount * this.step
    }
    isValueCorrectAndInRange(value){
        return (!isNaN(value) && value >= this.minNum && value <= this.maxNum ) || value == ''
    }
    setDisabilityOfIncreaseBtn(value){
        const nextValue = value + 1
        this.incrementBtnDisabled = nextValue > this.maxNum;
    }
    setDisabilityOfDecreaseBtn(value){
        const nextValue = value - 1
        this.decrementBtnDisabled = nextValue < this.minNum;
    }
    getNextValue(value){
        return value + this.step;
    }
    getPreviousValue(value){
        return value - this.step;
    }
    getValueToAdd(value){
        return this.maxNum - value;
    }
    getValueToSubtract(value){
        return value
    }


    render() {
        this.value = parseInt(this.props.value);
        this.setDisabilityOfIncreaseBtn(this.value);
        this.setDisabilityOfDecreaseBtn(this.value);

        return (
            <div className="time-selector">
                <button type="button"
                        className="time-selector__btn"
                        disabled={this.incrementBtnDisabled}
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
                        disabled={this.decrementBtnDisabled}
                        onClick={this.decrementValue}>
                    <FontIcon iconClassName="mdi mdi-chevron-down"
                              className="btn-icon btn-icon--move-down"/>
                </button>
            </div>
        );
    }
}
