
/*
    - Mounted: Gắn vào/lắp vào -> Khi đưa Component vào sử dụng (còn render code thì là thời điểm sau khi mounted)
    - Unmounted: Gỡ ra/tháo ra -> Khi gỡ hoặc chưa sd Component 

*/

import { useState } from "react";


function TodoList() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))

        return storageJobs ?? [] // Dòng này là: nếu storage là undefined hoặc null thì return []
    })

    const addHandle = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            //Save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })
        setJob('')
    }

    return (
        <div style={{ padding: 20 }}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={addHandle}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>


        </div>
    )
}


export default TodoList