import './TodoList.scss'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

function TodoList({todo}){
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
                    (<tr key={i}>
                        <td>{i++}</td>
                        <td>{todo.taskName}</td>
                        <td>{todo.taskDesc}</td>
                    </tr>)
                    )
                }
                </tbody>
            </Table>
        </>
    )}   
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}



export default connect(mapStateToProps)(TodoList)

