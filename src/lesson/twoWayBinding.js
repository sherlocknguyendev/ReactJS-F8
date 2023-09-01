
/*
    - One-way binding (React): Là sửa dữ liệu ở trên giao diện thì dữ liệu bên trong thay đổi (chỉ cs 1 đầu)
    - Two-way binding (Vue)  : Là sửa dữ liệu ở trên giao diện thì dữ liệu bên trong thay đổi và khi sửa dữ liệu bên trong thì bên ngoài thay đổi
                               (cs cả 2 đầu)

*/

import { useState } from "react";

const courses = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'HTML&CSS'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
]


function TwoWayBinding() {
    const [checked, setChecked] = useState([])

    const checkHandle = (id) => {
        setChecked(prevState => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prevState, id]
            }
        })
    }

    const submitHandle = () => {
        console.log({
            ids: checked
        });
    }

    return (
        <div style={{ padding: 20 }}>
            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => checkHandle(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={submitHandle}>Submit</button>
        </div>
    )
}


export default TwoWayBinding