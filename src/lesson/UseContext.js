
/*  
    - React cung cấp sẵn phương thức để tạo ra Context (bối cảnh - phạm vi) là createContext 
        -> Context giúp đơn giản hóa việc truyền dữ liệu từ component cha xuống component con mà k cần dùng tới props (có thể truyền dữ liệu trực tiếp mà k cần phải truyền qua component trung gian nào -> tránh nhiều và nếu mất component trung gian thì k truyền đc nữa)
    
    - Tạo context
        1. tạo ra context -> sử dụng createContext -> tạo phạm vi - bối cảnh ở component cha (mỗi createContext sẽ tạo ra 1 phạm vi riêng)
        2. Provider -> Viết ở component muốn truyền dữ liệu (cha)
        3. Consumer -> Viết ở component muốn nhận dữ liệu (con) -> sử dụng useContext() - đã viết sẵn thằng consumer để nhận dữ liệu -> truyền context muốn 'sử dụng' vào '()' của useContext()

*/

import { useState, createContext } from 'react'
import Paragraph from './Paragraph.js'
import '../App.css'

export const ThemeContext = createContext()

function UseContext() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ padding: 20 }}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Paragraph />
            </div>
        </ThemeContext.Provider>
    )
}

export default UseContext