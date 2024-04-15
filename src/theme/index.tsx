import React, { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { palette } from './palette.ts';
import { overrides } from './overrides.ts';
import { typography } from './typography.ts';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const memoizedValue = useMemo(
    () => ({
      palette: palette(),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue as any);

  theme.components = overrides(theme) as any;

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;


