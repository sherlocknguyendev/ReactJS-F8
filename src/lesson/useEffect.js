
/*
    - useEffect: Dùng khi muốn thực hiện các side effect
              -> Thường dùng để update DOM, Call API, Listen DOM events, ... 
              
    - side effect (tác dụng phụ, tác dụng bên cạnh): 
                               -> Là thuật ngữ sd chung trong lập trình phần mềm 
                               -> Là nói tới các tác động (effect) xảy ra dẫn tới dữ liệu của chương trình bị thay đổi

    - Cú pháp: useEffect(callback, [dependencies])
            -> callback là đối số bắt buộc, [deps] là đối số k bắt buộc - deps là biến chứa dữ liệu (có thể là props, state, ...)
    
    - Các trường hợp: 
                1. useEffect(callback) 
                                    -> Gọi callback mỗi khi component re-render (như khi setState)
                                    -> Gọi callback sau khi component đã thêm element vào DOM ( gọi callback sau khi chạy phần return() )
                2. useEffect(callback, [])
                                    -> Chỉ gọi callback 1 lần sau khi component mounted (tránh bị gọi callback vô hạn như TH1-khi ở trong callback lại cs setState)
                3. useEffect(callback, [deps])
                                    -> Callback sẽ được gọi lại mỗi khi deps thay đổi (deps cũ khác deps mới)
        -> Trong cả 3 trường hợp: +) Callback luôn được gọi sau khi component mounted (chỉ gọi được callback sau khi element đã được render vào DOM)
                                  +) Cleanup funcion luôn được gọi trước khi component unmounted (hàm giúp dọn dẹp mọi thứ ở trong bộ nhớ -> tránh rò rỉ bộ nhớ)
                                  +) Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted - trừ lần đầu tiên) -> Như kiểu: trước khi gọi callback lần mới thì sẽ dọn dẹp lần trước đó trước


    - useEffect:
        1. Cập nhật lại state
        2. Cập nhật DOM (mutated) -  mutated: đột biến (VD: thành phần bên trong object thay đổi)
        3. Render lại UI
        4. Gọi cleanup nếu deps thay đổi (sync)
        5. Gọi useLayoutEffect callback (sync)

    - useLayoutEffect: Dùng khi muốn render ra UI ở bước cuối cùng  -> khi re-reder lại component thì vẫn vào phần return trước khi vào callback của useLayoutEffect, nhưng chưa render lại UI cho người dùng thấy
        1. Cập nhật lại state
        2. Cập nhật DOM (mutated) -  mutated: đột biến (VD: thành phần bên trong object thay đổi) -> giống cập nhật
        3. Gọi cleanup nếu deps thay đổi (sync)
        4. Gọi useLayoutEffect callback (sync)
        5. Render lại UI

*/

import { useEffect, useState } from "react"

const tabs = ['posts', 'albums', 'comments']

const lessons = [
    {
        id: 1,
        name: 'ReactJS la gi? tai sao nen hoc ReactJS?'
    },
    {
        id: 2,
        name: 'SPA/MPA la gi?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function UseEffect() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [countDown, setCountDown] = useState(60)
    const [avatar, setAvatar] = useState()
    const [lessonsId, setLessonId] = useState(1)



    // -------------------- TH1 --------------------
    // useEffect(() => {
    //     document.title = title
    // })





    // -------------------- TH2 --------------------
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json()) // res.json() là covert từ kiểu JSON sang kiểu JS
    //         .then(posts => {
    //             setPosts(posts)
    //         })
    // }, []) 




    // -------------------- TH3 --------------------
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json())
    //         .then(datas => {
    //             setPosts(datas)
    //         })
    // }, [type])




    // --------------- useEffect with DOM events ---------------
    // useEffect(() => {

    //     const handleScroll = () => {
    //         setShowGoToTop(window.scrollY >= 600)

    // -> setShowGoToTop k làm component re-render nếu điều kiện bên trong k thay đổi (true===true) -> chỉ khi đk bên trong thay đổi nó ms re-render - khi cái cũ true mà cái mới false 
    // và nó chỉ gọi lại hàm handleScroll và set giá trị cho showGoToTop thôi

    // }

    // window.addEventListener('scroll', handleScroll)

    // -> callback này ở TH2 nên chỉ chạy 1 lần, nhưng event listener khai báo 1 lần và chạy mãi mãi

    // Vì là lắng nghe sự kiện ở phạm vi window nên khi unmount component thì sự kiện vẫn còn 
    // -> gây ra rò rỉ bộ nhớ, và khi mount component lần nữa thì window lại lắng nghe sự kiện khác (mới) -> sự kiện lắng nghe cũ vẫn ở đấy nhưng k dùng đc nữa do component trước đó đã unmounted rồi


    // Cleanup function
    // Phải return ra khỏi useEffect để React cs thể sử dụng 

    //     return () => { 
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])




    // --------------- useEffect with timer functions ---------------
    // Tính closure: countDown luôn tham chiếu tới biến ngoài nó để lấy giá trị 
    // -> callback trong useEffect ban đầu cs giá trị countDown là 60 (initialState) và countDown trong setCountDown(countDown - 1) tham chiếu tới nó
    // -> sau khi setCountDown chạy thì re-render component và [countDown] thay đổi nên gọi lại callback trong useEffect -> lúc này biến countDown trong callback đã là 59

    // useEffect(() => {
    //     const timerID = setTimeout(() => {
    //         setCountDown(countDown - 1)
    //     }, 1000)

    //     return () => clearTimeout(timerID)
    // }, [countDown])



    // --------------- useEffect with preview avatar ---------------
    // useEffect(() => {
    //     return () => {
    //         avatar && URL.revokeObjectURL(avatar.preview)
    //     }
    // }, [avatar])

    // const handlePreviewAvatar = (e) => {
    //     const file = e.target.files[0]
    //     file.preview = URL.createObjectURL(file)
    //     setAvatar(file)
    // }



    // --------------- useEffect with fake chat app ---------------
    // useEffect(() => {

    //     const handleComment = ({ detail }) => {
    //         console.log(detail)
    //     }
    //     window.addEventListener(`lesson-${lessonsId}`, handleComment)

    //     return () => {
    //         window.removeEventListener(`lesson-${lessonsId}`, handleComment)

    //     }
    // }, [lessonsId])



    return (
        <div style={{ padding: 20 }}>

            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}


            <br />


            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />


            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>


            {showGoToTop &&
                <button
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20
                    }}
                >
                    Go To Top
                </button>
            }


            <h1>{countDown}</h1>


            {/* <input
                type='file'
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
            */}


            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{ color: lessonsId === lesson.id ? 'red' : '#333' }}
                        onClick={() => setLessonId(lesson.id)}>{lesson.name}
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default UseEffect