import './InputBox.scss'
import { Form, Col, Row, Button } from "react-bootstrap"
import { useState } from 'react'
import { addTodo } from '../../actions'

function InputBox({dispatch}){
    const [title , setTitle] = useState('')
    const [task , setTask] = useState('')

    const submitTask = ()=>{
        dispatch(addTodo({title,task}))
        //console.log(title + ' ' + task)
        setTitle('') 
        setTask('')
    }

    return(
        <Form className="Form">
            <Row>
                <Col>
                <Form.Control 
                placeholder="Task title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        submitTask()
                    }
                }}
                />
                </Col>
                <Col xs={8}>
                <Form.Control 
                placeholder="Task description"
                value={task}
                onChange={e => setTask(e.target.value)} 
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        submitTask()
                    }
                }}
                />
                </Col>
                <Button onClick={submitTask}>Add Task</Button>
            </Row>
        </Form>
    )
}

export default InputBox