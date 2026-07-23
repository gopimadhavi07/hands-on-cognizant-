import React, { Component } from 'react';

class EventExamples extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState(
            { counter: this.state.counter + 1 }
        );

        this.sayHello();
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    sayHello() {
        alert("Hello! Member");
    }

    sayWelcome(message) {
        alert(message);
    }

    handleClick(event) {
        alert("I was clicked");
    }

    render() {
        return (
            <div>

                <h1>Event Examples App</h1>

                <h2>Counter: {this.state.counter}</h2>

                <button onClick={this.increment}>
                    Increment
                </button>

                &nbsp;&nbsp;

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br /><br />

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br /><br />

                <button onClick={(event) => this.handleClick(event)}>
                    OnPress
                </button>

            </div>
        );
    }
}

export default EventExamples;