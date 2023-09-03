
// useImperativeHandle  + forwardRef

import VideoNoSound from '../videos/VideoNoSound.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'

function Video(props, ref) {
    const videoRef = useRef()

    //callback trong useImperativeHandle trả về sẽ là giá trị của videoRef bên kia - useImperativeHandle.js (<Video ref={videoRef} />)
    //Để thể hiện tính private -> chỉ tác động đc đến 2 method là play và pause (kh ảnh hưởng gì đến element or component)
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        },
    }))
    return (
        <video
            ref={videoRef}
            src={VideoNoSound}
            width={500}
        />
    )
}

export default forwardRef(Video)