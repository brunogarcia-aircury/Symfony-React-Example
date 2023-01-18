import React from 'react';
import ReactDOM from 'react-dom/client';


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
                 .then(json => this.setState(c => c.message = json.message))
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);