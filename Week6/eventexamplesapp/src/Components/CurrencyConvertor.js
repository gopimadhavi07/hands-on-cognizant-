import React, { Component } from 'react';

class CurrencyConvertor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rupees: '',
            euro: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            rupees: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const euro = this.state.rupees / 90;

        this.setState({
            euro: euro.toFixed(2)
        });
    }

    render() {
        return (
            <div>

                <h1>Currency Convertor</h1>

                <form onSubmit={this.handleSubmit}>

                    <label>
                        Indian Rupees:
                    </label>

                    &nbsp;

                    <input
                        type="number"
                        value={this.state.rupees}
                        onChange={this.handleChange}
                    />

                    <br /><br />

                    <button type="submit">
                        Convert
                    </button>

                </form>

                {this.state.euro && (
                    <h2>
                        Euro: {this.state.euro}
                    </h2>
                )}

            </div>
        );
    }
}

export default CurrencyConvertor;