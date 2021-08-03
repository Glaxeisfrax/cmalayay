import { useState } from 'react';
import './CMMSTable.css';

const CMMSEditWOdata = (props) => {
    const [newTask, setEditTask] = useState('');
    const [newTaskproblem, setEditTaskproblem] = useState(''); 
    const [newTaskdate, setEditTaskdate] = useState('');  
    const [newTaskid, setEditTaskid] = useState('');  
    // const [newTaskstatus,setEditTaskstatus] =useState('')
    const [errorMessage, setErrorMessage] = useState('');
    
     const editTaskBtnHandler = () => {
        const index = props.tasks.findIndex( task => task.id === newTaskid);   
        if(newTaskid.trim() === '') {
            setErrorMessage('this field is required');
        } else if(index >= 0) {
            setErrorMessage('task already exists');
        } else {

                props.fetchTasksid
                ({
                    id: props.tasksCopy.id,
                    date: props.tasksCopy.date,
                    name: props.tasksCopy.name,
                    problem: props.taskCopy.problem,
                    status: props.taskCopy.status
                });
                props.editTask({
                id: newTaskid,
                date: newTaskdate,
                name: newTask,
                problem: newTaskproblem,
                status: 'pending'
            });

            setEditTaskid((newTaskid)+1);
            setEditTaskdate('');
            setEditTask('');
            setEditTaskproblem('');
            setErrorMessage('');       
        }   
    }
  
  
    

    return(
        <div>
           <div>
            <th>
            ID:<input 
                type="text"
                value = {newTaskid.id}
                onChange = { (e) => setEditTaskid(e.target.value)} 
            /> <br/>
            {errorMessage} <br />
            </th>
            <th>
            DATE:<input 
                type="text"
                value = {newTaskdate.date}
                onChange = { (e) => setEditTaskdate(e.target.value)} 
            /> <br/>
            {errorMessage} <br />
            </th>
            <th>
            NAME:<input 
                type="text"
                value = {newTask}
                onChange = { (e) => setEditTask(e.target.name)} 
            /> <br/>
            {errorMessage} <br />
            </th>
            <th>
            PROBLEM REPORT:<input 
                type="text"
                value = {newTaskproblem}
                onChange = { (e) => setEditTaskproblem(e.target.problem)} 
            /> <br/>
            {errorMessage} <br />
            </th>
            <button onClick={editTaskBtnHandler}>Edit Work Order</button>
            </div>
            
        </div>
    )
}

export default CMMSEditWOdata;
