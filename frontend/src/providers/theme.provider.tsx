import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppState } from './';
import { ReactNode } from 'react';


export interface ThemeProviderProps {
  children: ReactNode;
}


export const palette = (theme : 'dark' | 'light') => {
  let color = theme === 'dark' ? '#03aeff' : '#086cb3';
  
  return {
    primary: { main: color },
    secondary: { main: color },
  };
};

export function ThemeContextProvider({ children } : ThemeProviderProps) {
  const { appState : {preferences} } = useAppState();
  const theme = createTheme({
    direction: preferences.lang === 'ar' ? 'rtl' : 'ltr',
    palette: {
      ...palette(preferences.theme),
      mode: preferences.theme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
