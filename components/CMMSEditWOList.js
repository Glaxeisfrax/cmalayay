import './CMMSTable.css';
const CMMSEditWOList = ({task: {id,date,name,problem, status}, deleteTask, markAsDone}) => {
    return(
        <tr>
            <td>{id}</td>
            <td>{date}</td>
            <td>{name}</td>
            <td>{problem}</td> 
            <td>{status}</td>   
            <td>
                {
                    status === 'pending' ?
                    <button id= "done" onClick={() => markAsDone(name,problem)}>done</button> : null
                }
                <div className="Button_b">
                 <button id="del01" onClick={() => deleteTask(name, problem)}>delete</button>
                </div>
            </td>
        </tr>
    );
}

export default CMMSEditWOList;