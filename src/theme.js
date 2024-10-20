import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FC472C', // Bright Red for primary
    },
    secondary: {
      main: '#06D6A0', // Teal for secondary
    },
    background: {
      default: '#FFFCF9', // Off-white for light background
      paper: '#FFFFFF',    // White for paper elements
    },
    text: {
      primary: '#1F2D36', // Dark blue-gray for primary text
      secondary: '#06D6A0', // Teal for secondary text
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FC472C', // Bright Red for primary in dark mode
    },
    secondary: {
      main: '#06D6A0', // Teal for secondary
    },
    background: {
      default: '#1F2D36', // Dark blue-gray for background
      paper: '#2E3B48',    // Slightly lighter for paper elements
    },
    text: {
      primary: '#FFFCF9', // Off-white for primary text
      secondary: '#FFD166', // Yellow for secondary text
    },
  },
});

export { lightTheme, darkTheme };
