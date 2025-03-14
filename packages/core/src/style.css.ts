import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

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

export const buttonBase = style({
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
});

export const buttonRecipe = recipe({
  base: buttonBase,
  variants: {
    variant: {
      primary: {
        backgroundColor: blue[500],
        color: "white",
        borderColor: blue[500],
        boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]}`,
        ":hover": {
          backgroundColor: blue[600],
        },
        ":active": {
          backgroundColor: blue[700],
          boxShadow: "none",
          transform: "scale(0.99)",
        },
        ":focusVisible": {
          boxShadow: `0 0 0 4px ${blue[200]}`,
          outline: "none",
        },
      },
      secondary: {
        backgroundColor: grey[500],
        color: "white",
        borderColor: grey[500],
        boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${grey[400]}, inset 0 -2px 1px ${grey[600]}`,
        ":hover": {
          backgroundColor: grey[600],
        },
        ":active": {
          backgroundColor: grey[700],
          boxShadow: "none",
          transform: "scale(0.99)",
        },
        ":focusVisible": {
          boxShadow: `0 0 0 4px ${grey[200]}`,
          outline: "none",
        },
      },
      danger: {
        backgroundColor: "red",
        color: "white",
        borderColor: "red",
        boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px #ff6666, inset 0 -2px 1px #b30000`,
        ":hover": {
          backgroundColor: "#b30000",
        },
        ":active": {
          backgroundColor: "#800000",
          boxShadow: "none",
          transform: "scale(0.99)",
        },
        ":focusVisible": {
          boxShadow: `0 0 0 4px #ffcccc`,
          outline: "none",
        },
      },
    },
    disabled: {
      true: {
        backgroundColor: grey[200],
        color: grey[700],
        borderColor: "transparent",
        cursor: "not-allowed",
        boxShadow: "none",
        transform: "scale(1)",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
