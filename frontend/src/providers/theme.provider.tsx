import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppState } from './';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Theme {
    gradients: {
      light: string;
      dark: string;
    };
  }
  interface ThemeOptions {
    gradients?: {
      dark?: string;
      light?: string;
    };
  }
}


export interface ThemeProviderProps {
  children: ReactNode;
}


export const palette = (theme : 'dark' | 'light') => {
  let color = theme === 'dark' ? '#03aeff' : '#086cb3';
  
  return {
    primary: { main: color },
    secondary: { main: color },
    background: { 
      default : '#0f1217',
    }
  };
};

export function ThemeContextProvider({ children } : ThemeProviderProps) {
  const { appState : {preferences} } = useAppState();
  const theme = createTheme({
    gradients : { 
      light :"linear-gradient(90deg, rgba(227,57,125,1) 37%, rgba(247,97,70,1) 100%)",
      dark : "linear-gradient(90deg, rgba(22,26,33,1) 13%, rgba(32,36,44,1) 100%)"
    }, 
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
