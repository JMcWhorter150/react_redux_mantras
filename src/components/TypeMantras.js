import React from 'react';

export default class TypeMantras extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mantra: "",
            text: "",
            timesLeft: 10,
            currentTimesLeft: 10,
            is_spinning: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(props.mantra !== state.mantra) {
            return {
                mantra: props.mantra,
                text: "",
                timesLeft: 10,
                currentTimesLeft: 10,
                is_spinning: false
            }
        } else {
            return state;
        }
    }

    render () {
        let classThing = this.state.is_spinning ? 'App-logo' : '';
        return (
            <div>
                <h1>Type the following mantra {this.state.currentTimesLeft} times:</h1>
                <h2 className={classThing}>{this.state.mantra}</h2>
                <textarea className={classThing} onChange={this._handleChange} placeholder="Type Mantra Here" value={this.state.text}></textarea>
            </div>
        );
    }

    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        }, () => {this._checkMantras()})
    }

    _checkMantras = () => {
        const count = this._countSubStrings(this.state.text, this.props.mantra);
        if (count > (this.state.timesLeft - this.state.currentTimesLeft)) {
            this.setState({
                currentTimesLeft: this.state.timesLeft - count
            }, () => {this._checkCount()})
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

    _checkCount = () => {
        if (this.state.currentTimesLeft <= 0) {
            this.setState({
                is_spinning: true
            })
        }
    }
}