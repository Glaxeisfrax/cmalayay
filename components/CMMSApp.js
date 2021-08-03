import { useState } from 'react';
import CMMSEditWOForm from './CMMSEditWOForm';
import CMMSAddWOForm from './CMMSAddWOForm';
import CMMSEditWOdata from './CMMSEditWOdata';
import './CMMSTable.css'


const CMMSApp = (props) => { 
    const [tasks, setTasks] = useState([
        {id: 1, date: '8/2/2021, 1:02:39 PM', name: 'Cleo Malayay', problem: "Not Cooling", status: 'pending'},
      ]);
    const pendingTasks = [];
    const doneTasks = [];

    tasks.forEach( task => {
        if(task.status === 'pending') {
            pendingTasks.push(task);
        } else if(task.status === 'done') {
            doneTasks.push(task);
        }
    });
    const addTask = (task) => {
        let tasksCopy = [...tasks, task];
            setTasks(tasksCopy);
      } 

    const deleteTask = (name) => {
        const updatedTasks = tasks.filter( task => task.name !== name);

        setTasks(updatedTasks);
    }

    const markAsDone = (name) => {
        const tasksCopy = [...tasks];
        const index = tasks.findIndex( task => task.name === name);
        tasksCopy[index].status = 'done';

        setTasks(tasksCopy);
    }


// Edit
const editTask = (task) => {
    let tasksCopy = [...tasks, task];
        setTasks(tasksCopy);}


        const fetchTaskid = (id) => {
            const fetchTasks1 = tasks.filter( task => task.id !== id);
            setTasks(fetchTasks1);
        }
 





    return(
        <div>
            <h3> Work Order</h3>
            <CMMSAddWOForm addTask={addTask} tasks={tasks} />
            <div>
            <th id ="WOTable">
                <td>ID</td> 
                <td>*****DATE****</td> 
                <td>CUSTOMER NAME</td> 
                <td>PROBLEM REPORT</td> 
                <td>***STATUS***</td> 
                </th>
            </div> 
            <th>   
            <CMMSEditWOForm 
                // title="Pending Work Order" 
                tasks={pendingTasks} 
                deleteTask={deleteTask} 
                markAsDone={markAsDone} 
            />
            <CMMSEditWOForm 
                title="Completed Work Order" 
                tasks={doneTasks} 
                deleteTask={deleteTask}
            /> 
            </th>

            <CMMSEditWOdata editTask={editTask} tasks={tasks} 
                fetch={fetchTaskid}
               // tasks={pendingTasks} 
                deleteTask={deleteTask} 
                markAsDone={markAsDone} />

        </div>
    )
}

export default CMMSApp;