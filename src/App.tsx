import React from 'react';
import './App.css';
import FilterBy from "./components/filter-by/FilterBy";
import {createTheme, ThemeProvider} from "@mui/material";
import Results from "./components/results/Results";

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <FilterBy/>
                <Results/>
            </div>
        </ThemeProvider>
    );
}

export default App;
