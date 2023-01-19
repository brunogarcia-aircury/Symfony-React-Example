import React from "react";

export default class HelloForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: null,
            numberOfLetters: null
        }

        this.submit = this.submit.bind(this);
    }

    submit(event){
        event.preventDefault();
        const url = `/hello/${event.target.name.value}`;
        console.log(url);
        fetch(url,{method: 'POST'})
            .then(res => {
                if(!res.ok)
                    throw 'Bad response';
                return res.json();
            })
            .then(json => {
                this.setState({
                    message: json.message,
                    numberOfLetters: json.numberOfLetters
                });
            });
    }

    render() {
        return (<>
            <h1>Who are you? (FETCH)</h1>
            <form onSubmit={this.submit}>
                <input type='text' name='name' />
                <input type='submit' value='confirm' />
            </form>
            <br />
            <div>{this.state.message?this.state.message:'Hello ... ?'}</div>
            <div>Your name has {this.state.numberOfLetters??'?'} of letters</div>
        </>);
    }
}