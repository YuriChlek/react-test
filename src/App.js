import React from 'react'
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
        <div style={{overflow: "hidden"}} className="App">
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </div>
    );
}

export default App;
