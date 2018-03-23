import React, { Component } from 'react'; //this is importing the Component class

class Stopwatch extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);
    }    

    start(){
        this.setState({ 
            status: 'running', //when you click the start button the word 'running' shows
            start: new Date().getTime() //it will be set to a new time once the start button is clicked
        });

        setTimeout(this.update, 10); //this calls the update function once the start button is clicked
    }

    stop(){
        this.setState({
            status: 'stopped'
        });
    }

    update(){
        const { status, start } = this.state; //declaring two variables status and start 

        if(status === 'running'){ //if status is set to running set elapsed to 
            this.setState({
                elapsed: new Date().getTime() - start
            });

            setTimeout(this.update, 10); 
        }
    }

    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        });
    }

    render(){

        const { elapsed, status } = this.state;

        return (
            <div>
                <h1>{elapsed}</h1>
                <p>{status}</p>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;