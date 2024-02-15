import React, {useContext} from "react"
import ThemeContext from './../../ThemeContext';

const SettingsPage = () => {
    const {darkMode} = useContext(ThemeContext);

    return (<div style={{height: '100vh'}} className="container-fluid d-flex justify-content-center align-items-center">
        <h1 style={{color: `${darkMode ? "#ffffff" : "#000000"}`}}>Settings Page</h1>
    </div>)
};
export default SettingsPage