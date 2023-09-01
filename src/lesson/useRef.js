
/*
    - useRef: Dùng để lưu các giá trị bất kỳ qua một tham chiếu đc viết ở bên ngoài function component; Cũng thường dùng để lấy và lưu DOM elements (dùng ref={} vào element muốn lấy (tham chiếu) -> do React hỗ trợ)
              -> Tránh re-render component ảnh hưởng đến biến đó vì mỗi lần hàm re-render là lại tạo ra 1 phạm vi mới
    - useRef(initialValue): initialValue cs thể là bất kỳ kiểu dữ liệu nào và giá trị khởi tạo chỉ cs hiệu lực trong lần đầu (mounted)
                            -> useRef trả về là 1 object và cs thể sửa được properties (current)
*/

import { useEffect, useRef, useState } from 'react'



function UseRef() {
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        console.log(h1Ref.current) // h1Ref.current: Luôn trỏ tới element h1 ở trong DOM thật -> do gắn ref={} vào element h1
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(preState => preState - 1)
        }, 1000)
        console.log('Start -->', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('Stop -->', timerId.current);
    }

    return (
        <div style={{ padding: 20 }}>
            <h1 ref={h1Ref}>{count}</h1>
            {/* ref={h1Ref} -> Tham chiếu và lấy element thật của h1 trong DOM thật và lưu vào h1Ref */}

            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    )
}

export default UseRef
