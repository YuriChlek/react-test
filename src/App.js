import React from 'react'
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter } from "react-router-dom"
import style from "./App.css"

function App() {
    return (
        <div className={style.App}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </div>
    );
}

export default App;
