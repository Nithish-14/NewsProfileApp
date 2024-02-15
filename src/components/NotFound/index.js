import React, {useContext} from "react"
import ThemeContext from './../../ThemeContext';

const NotFound = () => {
    const {darkMode} = useContext(ThemeContext);

    return (<div style={{height: '100vh'}} className="container-fluid d-flex justify-content-center align-items-center">
        <h1 style={{color: `${darkMode ? "#ffffff" : "#000000"}`}}>Not Found</h1>
    </div>)
};

export default NotFound