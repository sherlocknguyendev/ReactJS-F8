
import { SET_TOTO_INPUT, ADD_TODO } from './constants'

export const setTodoInput = payload => ({ type: SET_TOTO_INPUT, payload })

export const addTodo = payload => ({ type: ADD_TODO, payload })