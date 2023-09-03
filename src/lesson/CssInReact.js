
import '../App.css'
// Thằng webpack đã cấu hình để các file có đuôi '.css' trở thành các file style

function CssInReact() {
    return (
        <div>
            <h1 className="h1Element">
                Hello guys
            </h1>
        </div>
    )
}

export default CssInReact

// Nếu chạy ở Development mode -> Mà mình dùng npm start / yarn start -> Các file import có đuôi '.css' -> Thì CSS sẽ thành dạng CSS Internal (là thẻ style đc tạo ra trong file import đó)
// Nếu đc build ở Production mode -> npm run build / yarn build -> Thì CSS sẽ thành dạng CSS External (là css đc nhúng từ 1 file khác - thẻ link)
// Ở Production -> Tất cả các file CSS sẽ đc gom lại thành 1 -> Nếu đặt tên class/id trùng sẽ bị ảnh hưởng -> sử dụng các cách đặt tên như BEM,...