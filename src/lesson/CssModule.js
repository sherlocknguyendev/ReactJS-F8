
import clsx from 'clsx';

import styles from './cssModule.module.scss'

/*      - webpack cấu hình để nhận dạng và xử lý file '.module.css' -> nó sẽ đọc content bên trong file css và trả về (export) 1 Object 
            -> Obj: với key là tên selectors cũ, value là tên selectors mới - đổi tên (nếu cái cũ là class thì cái mới cũng là class, nếu cũ là id thì mới sẽ là id) -> để nhận dạng tránh trùng với các CSS khác và mỗi Component sẽ có 1 file CSS riêng

        - CSS Module k sd đc với tag name; hay sd CSS Module với kiểu camelCase; CSS Module k cs tính kế thừa -> nên sẽ kết hợp CSS thường và CSS Module

        - Thư viện clsx và classnames sử dụng để viết nhiều class/id,.. trong 1 element khi sd với CSS Module

        - Thư viện sass: sẽ cài đặt loader để tải file scss và cấu hình cho webpack (có nghĩa phải có thư viện sass mới code đc scss) -> scss giúp viết css lồng nhau -> gọn, đẹp hơn 
*/


// console.log(styles);

function CssModule({ blue }) {

    const classes = clsx(styles.heading, {
        [styles.backgroundBlue]: blue // Nếu blue là true thì mới lấy class của 'styles.backgroundBlue'
    })

    return (
        <h1 className={classes}>
            I'm VanQuoc
        </h1>
    )
}

export default CssModule