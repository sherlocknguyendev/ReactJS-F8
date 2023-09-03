
// memo + useCallback
import { memo } from "react";


function Content({ onIncrease }) {
    console.log('re-render');
    return (
        <>
            <h1>Hello guys in Content Component</h1>
            <button onClick={onIncrease}>Click me!</button>
        </>
    )
}


export default memo(Content)