import React from 'react';

export default class TypeMantras extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mantra: "",
            text: "",
            timesLeft: 20,
            currentTimesLeft: 20
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.mantra !== state.mantra) {
            return {
                mantra: props.mantra,
                text: "",
                timesLeft: 20,
                currentTimesLeft: 20
            }
        } else {
            return state;
        }
    }

    render () {
        return (
            <div>
                <h1>Type the following mantra {this.state.currentTimesLeft} times:</h1>
                <h2>{this.state.mantra}</h2>
                <textarea onChange={this._handleChange} placeholder="Type Mantra Here" value={this.state.text}></textarea>
            </div>
        );
    }

    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        }, () => this._checkMantras())
    }

    _checkMantras = () => {
        const count = this._countSubStrings(this.state.text, this.props.mantra);
        if (count > (this.state.timesLeft - this.state.currentTimesLeft)) {
            this.setState({
                currentTimesLeft: this.state.timesLeft - count
            })
        }
    }

    _countSubStrings = (str, pattern) => {
        let count = 0
        const length = pattern.length;
        for (let i=0; i<str.length - length; i++) {
            if(str.slice(i, i+length) === pattern) {
                ++count;
            }
        }
        return count;
    }
}