import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './../styles/theme.style';

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    // const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem('isDarkTheme')) || false);

    useEffect(() => {
        localStorage.setItem('isDarkTheme', isDarkTheme);
    }, [isDarkTheme])

    return (
        <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
            <ThemeProvider theme={theme[isDarkTheme ? 'dark' : 'light']}>
                    {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeContextProvider;