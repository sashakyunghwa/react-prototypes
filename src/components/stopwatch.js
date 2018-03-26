import React, { Component } from 'react'; //this is importing the Component class
import Time from './format_time';


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

        const { start, elapsed } = this.state;

        let newStart = new Date().getTime();

        if(start){
            newStart -= elapsed;
        }
        
        this.setState({ 
            status: 'running', //when you click the start button the word 'running' shows
            start: newStart //it will be set to a new time once the start button is clicked
        });

        setTimeout(this.update, 10); //this calls the update function once after 10 millisceonds
    }

    stop(){
        this.setState({
            status: 'stopped'
        });
    }

    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0
        });
    }

    update(){ //we check is the status is running, then change elapsed to our new date/time - start 
        const { status, start } = this.state; //declaring two variables status and start 

        if(status === 'running'){ //if status is set to running set elapsed to 
            this.setState({
                elapsed: new Date().getTime() - start
            });

            setTimeout(this.update, 10); 
        }
    } 

    render(){
        const { elapsed, status } = this.state;

        return (
            <div className="jumbotron">
                <h1 className="display-3"><Time elapsed={elapsed}/></h1>
                <hr className="my-3"></hr>
                <p className="lead text-center">{status}</p>
                <p className="text-center">
                <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                <button className="btn btn-outline-danger mx-3" onClick={this.stop}>Stop</button>
                <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                </p>
            </div>
        )
    }
}

export default Stopwatch;