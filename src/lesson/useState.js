
/*
    - useState: Quản lý trạng thái của dữ liệu
        -> Để giúp đơn giản hóa việc "thể hiện trạng thái của dữ liệu" ra giao diện ng dùng
        -> Dùng khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu)
    
    - Note: 
        -> Component sẽ đc render lại sau khi 'setState'
        -> Initial state chỉ dùng cho lần đầu 
        -> setState là thay thế state bằng giá trị mới (k phải cộng dồn)
*/

import { useState } from 'react'

const orders = [100, 200, 300]

function UseState() {
    const [counter, setCounter] = useState(() => {
        const totals = orders.reduce((total, cur) => total + cur)
        return totals
    })
    // const [state, setState] = useState(initState) 
    // -> Ban đầu thì initState sẽ gán cho state bên trái, từ lần 2 trở đi thì state sẽ lấy giá trị đc set (là setState)

    const increaseHandle = () => {
        // sau khi chạy setCounter (ở dưới React cs cơ chế tự lên lịch trình, cho setCounter vào hàng đợi) sau đó thì nó sẽ gọi lại hàm UseState và set lại state (ở đây là counter) và hiển thị ra dữ liệu
        setCounter(preState => preState + 1) // call back với set state -> nếu có nhiều setState với callback thì nó sẽ thực thi từng setState xog rồi ms re-render)
        setCounter(preState => preState + 1) // setState thứ 2 sẽ đợi cái thứ 1 xog rồi chạy tiếp -> set 2 lần (với callback) nhưng component chỉ re-render lại 1 lần
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{counter}</h1>
            <button onClick={increaseHandle}>Inscrease me</button>
        </div>
    )

}


export default UseState