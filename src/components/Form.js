import React, { Component } from 'react'

class Form extends Component{
    
    constructor(){
        super()

        this.state = {
            inputName: '',
            name: 'Count',
            count: 0  
        }

        this.clickHandler = this.clickHandler.bind(this)        
    } 

    /* clickHandler = () => {
        console.log('Clicked It')
        this.setState({
            count: this.state.count + 1
        })
    } */

    clickHandler(){        
        console.log('Clicked It')
        this.setState({
            count: this.state.count + 1
        })
    }

    inputHandler = (e) => {
        this.setState({
            inputName: e.target.value            
        })
        console.log( this.state.inputName )
    }

    render(){
        return(
            <>
                <h1> Form </h1>

                <h2> { this.state.name } : { this.state.count }</h2>

                <button onClick={ this.clickHandler } className="btn btn-primary mb-4"> Click It </button> <br /><br />

                <input type="text" placeholder="Enter Your Name" value={ this.state.inputName } onChange={ this.inputHandler } className="form-control" /> <br />

                <h2>{ this.state.inputName }</h2>

                <button onClick={ this.inputHandler } className="btn btn-danger btn-block"> FInd the Input Vaue </button>

            </>
        )
    }
}

export default Form