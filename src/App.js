
import UseState from './lesson/useState'
import TwoWayBinding from "./lesson/twoWayBinding"
import TodoList from './lesson/todoList';
import UseEffect from './lesson/useEffect';
import UseRef from './lesson/useRef'
import UseCallback from './lesson/useCallback';
import UseMemo from './lesson/useMemo';
import UseReducer from './lesson/useReducer';

import { useState } from 'react';

function App() {

  // const [show, setShow] = useState(false)

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

      <UseReducer />

    </div>
  );
}

export default App;
