
/*
    - useReducer: Cung cấp cho mình cs thêm 1 sự lựa chọn để sử dụng state cho function component
                -> Nếu dùng useState giải quyết đc bài toán nào đó thì dùng useReducer cũng đc (và ngược lại)
                -> Dùng useState là đa số: khi component có các state kiểu dl đơn giản (chuỗi, số, boolean, ...) hoặc phức tạp nhẹ (object, array nhưng chỉ cs 1 cấp) hoặc khi component chứa số lượng state ít
                -> Dùng useReducer khi component có các state kiểu dl phức tạp hơn (như khi là object, array mà có nhiều tầng nhiều lớp) hoặc khi component chứa số lượng state nhiều (các state phải tính toán nhiều, có thể các state phụ thuộc nhau)
    
    - Different:
        +) useState 
            1. Init State: 0
            2. Actions: Up (state + 1) / Down (state - 1)

        +) useReducer 
            1. Init State: 0
            2. Actions: Up (state + 1) / Down (state - 1)
            3. Reducer
            4. Dispatch
*/

import { useReducer } from 'react'

// Tạo init state
const initState = 0;

// Tạo actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Tạo reducer
const reducer = (state, actions) => {
    switch (actions) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}


function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initState)
    //initState đầu tiên sẽ gán cho biến count
    // dispatch: Thực hiện actions -> thay đổi state -> re-render component

    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>


            <button onClick={() => dispatch(DOWN_ACTION)}>
                {/* Khi ấn click sẽ gọi dispatch thì phải truyền action -> và useReducer sẽ xử lý và nó gọi reducer để tính toán và trả ra kết quả */}
                Down
            </button>

            <button onClick={() => dispatch(UP_ACTION)}>
                Up
            </button>
        </div>
    )
}


export default UseReducer