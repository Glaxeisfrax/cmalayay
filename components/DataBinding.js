import React from 'react';

class DataBinding extends React.Component{
state = {
    name:'',
    lname:''
}

inputChangeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

resetChangeHandler = (e) => {
    this.setState({
        name:'',
        lname:''
    })
}

    render(){
    return(
        <div>
            
            First Name: <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChangeHandler}/>
            <br/>
            Last Name: <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.inputChangeHandler}/>
        
            <h1> HELLO !  {this.state.name}  {this.state.lname}</h1>
             <button onClick={this.resetChangeHandler}>RESET</button>

        </div>
    );
}
}
export default DataBinding;