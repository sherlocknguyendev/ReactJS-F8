
import UseState from './lesson/UseState';
import TwoWayBinding from "./lesson/TwoWayBinding";
import TodoList from './lesson/TodoList';
import UseEffect from './lesson/UseEffect';
import UseRef from './lesson/UseRef';
import UseCallback from './lesson/UseCallback';
import UseMemo from './lesson/UseMemo';
import UseReducer from './lesson/UseReducer';
import TodoApp from './lesson/TodoAppWithUseReducer';
import UseContext from './lesson/UseContext';
import GlobalState from './lesson/GlobalState.js';
import UseImperativeHandle from './lesson/UseImperativeHandle.js';
import CssInReact from './lesson/CssInReact';
import CssModule from './lesson/CssModule';
import ReactRouter from './lesson/react-router-v6/ReactRouter';




// import { useState } from 'react';

function App() {

  // const [show, setShow] = useState(false) -> Bài useEffect

  return (
    <div className="App">


      {/* <UseState /> */}

      {/* <TwoWayBinding /> */}

      {/* <TodoList /> */}

      {/* <button style={{ marginLeft: 20 }} onClick={() => setShow(!show)}>Toggle</button>
      {show && <UseEffect />} */}

      {/* <UseRef /> */}

      {/* <UseCallback /> */}

      {/* <UseMemo /> */}

      {/* <UseReducer /> */}

      {/* <TodoApp /> */}

      {/* <UseContext /> */}

      {/* <GlobalState /> */}

      {/* <UseImperativeHandle /> */}

      {/* <CssInReact /> */}

      {/* 
      <CssModule />
      <CssModule blue /> 
      */}

      <ReactRouter />

    </div>
  );
}

export default App;
