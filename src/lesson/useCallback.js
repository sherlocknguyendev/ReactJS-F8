
/*
    - meno() - ghi nhớ: Là 1 phương thức của React -> Higher Order Component (HOC)
    - memo: Ghi nhớ props của 1 Component và quyết định xem cs render lại Component đó hay k (nói chung là memo giúp xử lý 1 Component để tránh re-render k cần thiết - nếu props k đổi thì k re-render)
            -> Để tối ưu về hiệu năng 
    - memo: Sử dụng toán tử === để so sánh (so sánh tham chiếu (địa chỉ vùng nhớ) - là kiểu Obj)

    
    - useCallback: Giúp tránh tạo ra những hàm mới k cần thiết ở trong function component -> Dùng useCallback chỉ khi nào dùng memo()
    - Cú pháp: useCallback(callback, [deps]) 
               -> Nếu [deps] là rỗng - [] thì hàm nó sẽ chỉ dùng tham chiếu trước đó (của chính hàm đó)
               -> Nếu [deps] cs và nó thay đổi thì mỗi lần thay đổi thì callback trong useCallback sẽ trả về 1 hàm mới vs 1 tham chiếu mới

               
*/

import Content from "./content";

import { useCallback, useState } from "react";

function UseCallback() {
    const [count, setCount] = useState(0)


    // useCallback nhận vào đối số thứ nhất là 1 callback và là 1 hàm 
    // -> Arrow function nó tạo ra hàm (kiểu obj), trả về địa chỉ vùng nhớ (tham chiếu) và lưu ra bên ngoài phạm vi của UseCallback Component -> sau đó nó return lại cái tham chiếu đó cho biến handleIncrease
    const handleInscreae = useCallback(() => {
        setCount(preState => preState + 1)
    }, [])
    // Vì deps trống - [] -> nên hàm trong useCallback vẫn chạy nhưng trả về cái tham chiếu trước đó, 
    // nó chỉ tạo ra địa chỉ vùng nhớ mới (tham chiếu mới) khi [deps] thay đổi -> nó chạy hàm trong useCallback

    return (
        <div style={{ padding: 20 }}>
            <Content onIncrease={handleInscreae} />
            <h1>{count}</h1>
        </div>
    )
}

export default UseCallback