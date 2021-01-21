import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment() {
        this.setState({
            counter: (this.state.counter + 1)
        })
    }

    decrement() {
        this.setState({
            counter: (this.state.counter - 1)
        })
    }

    render() {
        return(
            <div>
                <CounterDisplay counter={this.state.counter} />
                <button onClick={(e) => this.increment()}>Plus 1</button>
                <button onClick={(e) => this.decrement()}>Minus 1</button>
            </div>
        )
    }
}