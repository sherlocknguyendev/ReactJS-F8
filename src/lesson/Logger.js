
// TodoApp
// logger này như 1 middleware
function logger(reducer) {
    // Nhận đc prevState và action ở đây là do useReducer nó sử lý bên file todoApp... và trả về
    return (prevState, action) => {
        console.group(action.type)

        console.log('Prev state: ', prevState);
        console.log('Action: ', action);

        const nextState = reducer(prevState, action)

        console.log('Next state: ', nextState);
        console.groupEnd()
        return nextState
    }
}

export default logger