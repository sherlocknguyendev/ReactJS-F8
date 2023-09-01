/*

    - useMemo: Tránh thực hiện lại logic nào đó k cần thiết (như khi setState của đứa khác làm re-render component nhưng k muốn tính toán lại chỗ nào đó -> Tăng hiệu suất)

    - useMemo và useCallback: là hai hook trong React được sử dụng để tối ưu hiệu suất của ứng dụng. 
                              Mặc dù cách hoạt động của chúng có vẻ giống nhau, nhưng chúng có một số khác biệt. 
        -> useMemo được sử dụng để lưu trữ kết quả của một hàm và chỉ tính toán lại khi các phụ thuộc ([deps]) thay đổi. (Nếu phụ thuộc là [] thì nó sẽ tính 1 lần và luôn lấy kết quả trước đó)
           Nó trả về kết quả của hàm và ngăn chặn việc tính toán lại trong các lần render sau nếu các phụ thuộc không thay đổi. 
        -> useCallback được sử dụng để lưu trữ một hàm và chỉ tạo lại khi các phụ thuộc thay đổi. 
           Nó trả về chính hàm đó và ngăn chặn việc tạo lại hàm trong các lần render sau nếu các phụ thuộc không thay đổi.

        -> Khi muốn ngăn chặn việc tính toán lại một giá trị thì chọn useMemo 
        -> Khi muốn tối ưu hóa việc truyền hàm vào các component con thì chọn useCallback 

*/

import { useMemo, useRef, useState } from "react"

function UseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef()

    const handleAdd = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(() => {
        const resultPrice = products.reduce((result, product) => result + product.price, 0)
        console.log('Re-calc');
        return resultPrice
    }, [products])

    return (
        <div style={{ padding: 20 }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name product..."
                onChange={e => setName(e.target.value)}
            />

            <br />

            <input
                value={price}
                placeholder="Enter price product..."
                onChange={e => setPrice(e.target.value)}
            />

            <br />
            <button onClick={handleAdd}>Add</button>
            <br />

            Total Price: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>

        </div>
    )

}

export default UseMemo  