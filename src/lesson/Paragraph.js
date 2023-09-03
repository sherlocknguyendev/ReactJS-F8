

// useContext

import { useContext } from "react"
import { ThemeContext } from './UseContext.js'

function Paragraph() {
    const theme = useContext(ThemeContext)

    return (
        <h1 className={theme}>Hello guys</h1>
    )
}

export default Paragraph