    import {useState} from 'react';
   
    // import CMMSWorkOrder from './components/CMMSPWorkOrder';
    
    const CMMSGetName =(props) =>{
        const [dispatcher,setDName]= useState([
            {name: ''},
        ]);

    const  inputChangeHandler = (e) => {
              setDName({[e.target.name] : e.target.value});}

        return(
            <div>
            Name: <input
            type="text"
            name="name"
            value={dispatcher.name}
            onChange={inputChangeHandler}/>
            <br/>
                  
            <h1> HELLO ! {dispatcher.name}</h1>
            <p>Your service dispatcher today!</p>
            </div>
        );
    }
    export default CMMSGetName;