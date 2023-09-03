
/*
    - useImperativeHandle: Xử lý ràng buộc, xử lý mệnh lệch -> giúp tùy chỉnh 'ref' của 1 function component
        -> useImperativeHandle(ref, callback)
    - function component sẽ kh có ref nên k thể truyền ref qua props cho component khác (props ref đc React sử dụng với mục đích riêng)
        -> Nếu muốn nhận props ref ở component nào thì phải có HOC forwardRef - method ở component đó
*/


import { useRef } from 'react'
import Video from './Video.js'

function UseImperativeHandle() {
    const videoRef = useRef()

    const handlePauseVideo = () => {
        videoRef.current.pause()
    }

    const handlePlayVideo = () => {
        videoRef.current.play()
    }


    return (
        <>
            <Video ref={videoRef} />
            <br />
            <button onClick={handlePauseVideo}>Pause</button>
            <button onClick={handlePlayVideo}>PLay</button>
        </>
    )
}

export default UseImperativeHandle