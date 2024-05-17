import React from 'react';
import Counter from './Counter';
import Button from './Button';

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decreaseCount = () => {
        this.setState({ count: this.state.count - 1 });
    }

    resetCount = () => {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div className="counter-app">
                <h1>Counter App</h1>
                <Counter count={this.state.count} />
                <div className="button-group">
                    <Button label="+" onClick={this.increaseCount} />
                    <Button label="-" onClick={this.decreaseCount} />
                    <Button label="Reset" onClick={this.resetCount} />
                </div>
            </div>
        );
    }
}

export default CounterApp;
