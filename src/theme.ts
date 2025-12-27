import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#666666',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '1.2rem',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase' as const,
          letterSpacing: '1px',
          fontSize: '0.9rem',
          fontWeight: 500,
          padding: '12px 24px',
        },
        contained: {
          border: '1px solid #000',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#000',
          },
        },
        outlined: {
          border: '1px solid #000',
          color: '#000',
          '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid #e5e5e5',
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': {
              borderColor: '#e5e5e5',
            },
            '&:hover fieldset': {
              borderColor: '#000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
        },
      },
    },
  },
});
