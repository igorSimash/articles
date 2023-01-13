import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import {router} from "./router/Router";
import {RouterProvider} from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <RouterProvider router={router}/>
            </div>
        </ThemeProvider>
    );
}

export default App;



