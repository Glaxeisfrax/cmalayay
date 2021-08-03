import CMMSEditWOList from './CMMSEditWOList';
import './CMMSTable.css';

const CMMSEditWOForm = ({tasks, title, deleteTask, markAsDone}) => {
    const display = tasks.length > 0 ?
    <>
        <h2>{title}</h2>
        <table>
            {
                tasks
                    .map( task => <CMMSEditWOList task={task}  deleteTask={deleteTask} markAsDone={markAsDone}/>)
            }
        </table>
    </> : 
    <h2>{title}</h2>
    
    return(
        <>
            {display}
        </>
    )
}

export default CMMSEditWOForm;
