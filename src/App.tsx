import { ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import customTheme from './theme/customTheme';
import Dashboard from './pages/Dashboard/Dashboard';

function App(): ReactElement {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
