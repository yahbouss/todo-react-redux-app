import './TodoList.scss'
import { Table } from 'react-bootstrap'

let todo = [
    //{taskName: "5edma", task: "bi3 kaki"},
    //{taskName: "test", task: "bi3 mtabga"},
    //{taskName: "lol", task: "bi3 souki"}
]



function TodoList(){
    if (todo.length === 0) {
        return ( <h1 className="empty">Empty Tasks</h1>   )
    }else {
        let i = 0;
    return(
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                    </tr>
                </thead>
                <tbody>
                {todo.map(todo => 
                    (<tr>
                        <td>{i++}</td>
                        <td>{todo.taskName}</td>
                        <td>{todo.task}</td>
                    </tr>)
                    )
                }
                </tbody>
            </Table>
        </>
    )}
}

export default TodoList