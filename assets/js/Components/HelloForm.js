import React, {Suspense} from "react";

export default class HelloForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: null
        }

        this.submit = this.submit.bind(this);
    }

    submit(event){
        event.preventDefault();
        this.setState( {
            name: event.target.name.value
        });
    }

    render() {
        return (<Suspense>
            <h1>Who are you?</h1>
            <form onSubmit={this.submit}>
                <input type='text' name='name' />
                <input type='submit' value='confirm' />
            </form>
            <br />
            <div>{this.state.name?`Hello ${this.state.name}`:'Hello ... ?'}</div>
        </Suspense>);
    }
}