
import { useStore, actions } from "./storeForGlobalState"

function GlobalState() {
    const [state, dispatch] = useStore()

    const [todos, todoInput] = state

    const handleAddTodo = () => {
        dispatch(actions.addTodo(todoInput))
    }

    return (
        <>
            <input
                value={todoInput}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />

            <button onClick={handleAddTodo}>Add</button>

            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}

        </>
    )
}

export default GlobalState