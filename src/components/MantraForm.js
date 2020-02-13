import React from 'react';

export default class MantraForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }
    }

    render() {
        return (
            <form onSubmit={this._submitForm}>
                <input onChange={this._updateText} type="text" value={this.state.text}></input>
            </form>
        );
    }

    _updateText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    _submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.text);
        this.setState({
            text: ""
        })
    }


}