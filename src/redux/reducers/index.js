import { combineReducers } from "redux";
import { todo } from './todo'

const todoapp = combineReducers({
    todo
})

export default todoapp