
import { useReducer, useRef } from "react";
import logger from "./Logger";


const initState = {
    job: '',
    jobs: []
}


const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';


const setJob = payload => ({ type: SET_JOB, payload })
const addJob = payload => ({ type: ADD_JOB, payload })
const deleteJob = payload => ({ type: DELETE_JOB, payload })


const reducer = (state, actions) => {
    switch (actions.type) {
        case SET_JOB:
            return {
                ...state,
                job: actions.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, actions.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(actions.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid actions')

    }
}


function TodoApp() {
    const [state, dispatch] = useReducer(logger(reducer), initState)

    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmitJob = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Todo App</h2>

            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />

            <button onClick={handleSubmitJob}>Add</button>
            <ul>

                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}> &times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp