import React from 'react'
import Home from "./components/pages/home/Home"
import Addtitle from "./components/pages/addtitle/Addtitle"
import GenerateList from './components/pages/GenerateList/GenerateList';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { CurrentProvider } from './components/pages/searchandadd/CurrentContext';
import {CollectionProvider} from './components/pages/searchandadd/CollectionContext';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

var theme = createTheme({
    palette: {
        primary: {
            main: '#D84315',
        }, 
        secondary: {
            main: '#FBE9E7'
        }

    },
    shape: {
        borderRadius:20,
    },
    typography: {
        allVariants: {
            color: "rgb(33,33,33)"
        },
    },

})

theme = responsiveFontSizes(theme);

export default function App() {
    return (
        <CurrentProvider>
            <CollectionProvider>
            <ThemeProvider theme={theme}>
                <div className='App'>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="addtitle" element={<Addtitle />} />
                            <Route path="generatelist" element={<GenerateList />}/>
                        </Routes>

                    </BrowserRouter>
                </div>
            </ThemeProvider>
            </CollectionProvider>
        </CurrentProvider>
    )
}
