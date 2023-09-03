import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProviderStore } from './lesson/storeForGlobalState'

/*

- Fake comments, tự custom 1 event ở phạm vi global
  -> emit: phát 
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung này là của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // React.StrictMode: Là Component của React cs cơ chế để verify lại code giúp code tốt hơn (chỉ hoạt động ở dev mode) 
  //                   -> Có thể gây ra tình trạng console.log 1 lần mà bị log ra 2 lần

  <React.StrictMode>
    {/* <ProviderStore> -> ProviderStore trong bài global state  */}
    <Router>
      <App />
    </Router>
    {/* </ProviderStore> */}
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
