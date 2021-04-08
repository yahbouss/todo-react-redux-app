import { combineReducers } from "redux";
import { todo } from './todo'
import visibility from './visibility'

const todoapp = combineReducers({
    todo,
    visibility
})

export default todoapp