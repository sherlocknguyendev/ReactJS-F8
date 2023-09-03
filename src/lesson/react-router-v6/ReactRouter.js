
import { Routes, Route, Link } from 'react-router-dom';

// Router, Routing: Chỉ tạo ra cơ chế định tuyến nội bộ
// Routes là thẻ cha chứa các Route 
// Route: tuyến đường -> là thẻ chứa path (đường dẫn) và element muốn render ra (trong element phải là 1 React Element)
// Link: Giúp render element mà k phải re-load trang (cơ chế SPA)

import Home from './Home.js';
import News from './News.js';
import Contact from './Contact.js';

function ReactRouter() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/news'>News</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>

    )
}

export default ReactRouter