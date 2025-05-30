import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef,
// useState,
 } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "../styles/stylexStyles.js";
const Input = forwardRef((props, ref) => {
    const { "aria-describedby": ariaDescribedby, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, autoComplete, autoFocus, className, defaultValue, disabled = false, endAdornment, error = false, id, multiline = false, name, onClick, onChange, onKeyDown, onKeyUp, onFocus, onBlur, placeholder, readOnly, required, startAdornment, value, type: typeProp, rows, variant = "outlined", darkMode = false, ...other } = props;
    // const [focused, setFocused] = useState(false);
    const handleFocus = (event) => {
        // setFocused(true);
        onFocus?.(event);
    };
    const handleBlur = (event) => {
        // setFocused(false);
        onBlur?.(event);
    };
    const type = !multiline ? typeProp ?? "text" : undefined;
    const rootProps = `${{
        variant,
        error,
        disabled,
        darkMode,
    }} ${className || ""}`;
    const inputProps = {
        "aria-describedby": ariaDescribedby,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        autoComplete,
        autoFocus,
        defaultValue,
        disabled,
        id,
        name,
        onChange,
        onClick,
        onKeyDown,
        onKeyUp,
        onFocus: handleFocus,
        onBlur: handleBlur,
        placeholder,
        readOnly,
        required,
        type,
        value,
        rows: multiline ? rows : undefined,
        className: rootProps,
        "data-optiui": true,
    };
    const InputComponent = multiline ? "textarea" : "input";
    return (_jsxs("div", { ref: ref, ...other, children: [startAdornment, _jsx(InputComponent, { ...inputProps, ...stylex.props(styles.inputBase, disabled && styles.buttonDisabled) }), endAdornment] }));
});
Input.displayName = "Input";
export default Input;
