import { useState } from 'react';
import './CMMSTable.css';

const CMMSAddWOForm = (props) => {
    const [newTask, setNewTask] = useState('');
    const [newTaskproblem, setNewTaskproblem] = useState(''); 
    const [newTaskdate, setNewTaskdate] = useState(new Date().toLocaleString());  
    const [newTaskid, setNewTaskid] = useState(2);  
    const [errorMessage, setErrorMessage] = useState('');
    
    const addTaskBtnHandler = () => {
        const index = props.tasks.findIndex( task => task.name.toLowerCase() === newTask.toLowerCase() );   
        if(newTask.trim() === '') {
            setErrorMessage('this field is required');
        } else if(index >= 0) {
            setErrorMessage('task already exists');
        } else {
            props.addTask({
                id:newTaskid,
                date: newTaskdate,
                name: newTask,
                problem: newTaskproblem,
                status: 'pending'
            });
            setNewTaskid((newTaskid)+1);
            setNewTaskdate( new Date().toLocaleString());
            setNewTask('');
            setNewTaskproblem('');
            setErrorMessage('');       
        }   
    }

    return(
        <div>
           <div>
            <th>
            NAME:<input 
                type="text"
                value = {newTask}
                onChange = { (e) => setNewTask(e.target.value)} 
            /> <br/>
            {errorMessage} <br />
            </th>
            <th>
            PROBLEM REPORT:<input 
                type="text"
                value = {newTaskproblem}
                onChange = { (e) => setNewTaskproblem(e.target.value)} 
            /> <br/>
            {errorMessage} <br />
            </th>
            <button onClick={addTaskBtnHandler}>Add Work Order</button>
            </div>
            
        </div>
    )
}

export default CMMSAddWOForm;