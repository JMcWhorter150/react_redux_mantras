import React from 'react';

export default class TypeMantras extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mantra: "",
            text: ""
        }
    }

    render () {
        return (
            <div>
                <h1>Type the following mantra 20 times:</h1>
                <h2>{this.props.mantra}</h2>
                <textarea onChange={this._handleChange} placeholder="Type Mantra Here" value={this.state.text}></textarea>
            </div>
        );
    }

    _handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    _checkMantra = () => {
        // some stuff to add later
    }
}