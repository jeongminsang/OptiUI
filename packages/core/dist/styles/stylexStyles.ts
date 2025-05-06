import * as stylex from '@stylexjs/stylex';
import "./stylex.global.css";

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export const styles = stylex.create({
  buttonBase: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 600,
    fontSize: "0.875rem",
    lineHeight: 1.5,
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 150ms ease",
    border: "1px solid",
    outline: "none",
    textAlign: "center",
  },

  variantPrimary: {
    backgroundColor: blue[500],
    color: 'white',
    borderColor: blue[500],
    boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]}`,

    ':hover': {
      backgroundColor: blue[600],
    },
    ':active': {
      backgroundColor: blue[700],
      boxShadow: 'none',
      transform: 'scale(0.99)',
    },
    ':focus-visible': {
      boxShadow: `0 0 0 4px ${blue[200]}`,
      outline: 'none',
    },
  },

  variantSecondary: {
    backgroundColor: grey[500],
    color: 'white',
    borderColor: grey[500],
    boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${grey[400]}, inset 0 -2px 1px ${grey[600]}`,

    ':hover': {
      backgroundColor: grey[600],
    },
    ':active': {
      backgroundColor: grey[700],
      boxShadow: 'none',
      transform: 'scale(0.99)',
    },
    ':focus-visible': {
      boxShadow: `0 0 0 4px ${grey[200]}`,
      outline: 'none',
    },
  },

  variantDanger: {
    backgroundColor: 'red',
    color: 'white',
    borderColor: 'red',
    boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px #ff6666, inset 0 -2px 1px #b30000`,

    ':hover': {
      backgroundColor: '#b30000',
    },
    ':active': {
      backgroundColor: '#800000',
      boxShadow: 'none',
      transform: 'scale(0.99)',
    },
    ':focus-visible': {
      boxShadow: `0 0 0 4px #ffcccc`,
      outline: 'none',
    },
  },

  buttonDisabled: {
    backgroundColor: grey[200],
    color: grey[700],
    borderColor: 'transparent',
    cursor: 'not-allowed',
    boxShadow: 'none',
    transform: 'scale(1)',
  },

  inputBase: {
    width: '320px',
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    padding: '8px 12px',
    borderRadius: '8px',
    border: `1px solid ${grey[200]}`,
    backgroundColor: '#fff',
    color: grey[900],
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: `0px 2px 2px ${grey[50]}`,

    ':hover': {
      borderColor: blue[400],
    },
    ':focus': {
      borderColor: blue[400],
      boxShadow: `0 0 0 3px ${blue[200]}`,
    },
    ':focus-visible': {
      outline: 'none',
    },
  },

  inputOutlined: {
    border: `1px solid ${grey[300]}`,
    backgroundColor: 'white',
    ':hover': { borderColor: blue[400] },
    ':focus': { borderColor: blue[400], boxShadow: `0 0 0 3px ${blue[200]}` },
  },

  inputFilled: {
    backgroundColor: grey[100],
    border: 'none',
    ':hover': { backgroundColor: grey[200] },
    ':focus': { backgroundColor: grey[300] },
  },

  inputError: {
    borderColor: 'red',
    boxShadow: '0 0 0 3px rgba(255, 0, 0, 0.2)',
  },

  inputDisabled: {
    backgroundColor: grey[200],
    color: grey[500],
    cursor: 'not-allowed',
    borderColor: grey[300],
    boxShadow: 'none',
  },

  inputDarkMode: {
    color: grey[300],
    backgroundColor: grey[900],
    borderColor: grey[700],
    boxShadow: `0px 2px 2px ${grey[900]}`,
    ':hover': { borderColor: blue[400] },
    ':focus': { borderColor: blue[400], boxShadow: `0 0 0 3px ${blue[600]}` },
  },
});

export default styles;