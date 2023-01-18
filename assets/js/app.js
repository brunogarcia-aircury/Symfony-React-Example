import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor() {
        super();

        this.state = {message: 'loading'};
    }

    componentDidMount() {
            fetch('/api/fetch example')
                 .then(res => res.json())
                 .then((json)=>{
                     console.log(json);
                     return json;
                 })
                 .then(json => this.setState({message: json.message}))
                 .catch(e => console.log(e));
    }

    render() {
        return (
            <>
                <h1>Hello World!!</h1>
                <p>{this.state.message}</p>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));