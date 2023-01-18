import React from 'react';
import ReactDOM from 'react-dom';

console.log('Flag APP');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            entries: []
        };
    }

    componentDidMount() {

    }

    render() {
        console.log('render')
        return (
            <>Hello World!!</>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));