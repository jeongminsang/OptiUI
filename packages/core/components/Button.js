import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, useEffect, useRef, useState, } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "../styles/stylexStyles.js";
function useButton(params) {
    const { disabled = false, focusableWhenDisabled = false } = params;
    const [active, setActive] = useState(false);
    const [focusVisible, setFocusVisible] = useState(false);
    const handleMouseDown = () => setActive(true);
    const handleMouseUp = () => setActive(false);
    const handleKeyDown = (event) => {
        if (event.key === " " || event.key === "Enter") {
            setActive(true);
        }
    };
    const handleKeyUp = (event) => {
        if (event.key === " " || event.key === "Enter") {
            setActive(false);
        }
    };
    const handleFocus = () => setFocusVisible(true);
    const handleBlur = () => setFocusVisible(false);
    const handleMouseLeave = () => setActive(false);
    useEffect(() => {
        const handleGlobalMouseUp = () => setActive(false);
        document.addEventListener("mouseup", handleGlobalMouseUp);
        return () => document.removeEventListener("mouseup", handleGlobalMouseUp);
    }, []);
    const getRootProps = (otherHandlers = {}) => {
        const buttonProps = {
            onBlur: handleBlur,
            onFocus: handleFocus,
            onKeyDown: handleKeyDown,
            onKeyUp: handleKeyUp,
            onMouseDown: handleMouseDown,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseLeave,
        };
        if (disabled) {
            buttonProps["aria-disabled"] = true;
            if (!focusableWhenDisabled) {
                buttonProps.tabIndex = -1;
            }
        }
        Object.keys(otherHandlers).forEach((key) => {
            if (key.startsWith("on") &&
                typeof otherHandlers[key] === "function") {
                const originalHandler = buttonProps[key];
                buttonProps[key] = (event) => {
                    originalHandler?.(event);
                    if (!disabled || key === "onBlur") {
                        otherHandlers[key](event);
                    }
                };
            }
            else {
                buttonProps[key] = otherHandlers[key];
            }
        });
        return buttonProps;
    };
    return {
        active,
        focusVisible,
        setFocusVisible,
        getRootProps,
    };
}
const Button = forwardRef(function Button(props, forwardedRef) {
    const { children, className, disabled = false, focusableWhenDisabled = false, href, to, as, variant = "primary", ...other } = props;
    const buttonRef = useRef(null);
    const ButtonComponent = as || (href || to ? "a" : "button");
    const { getRootProps } = useButton({
        disabled,
        focusableWhenDisabled,
        href,
        to,
        variant,
        ...other,
    });
    const styleXProps = stylex.props(styles.buttonBase, variant === "primary" && styles.variantPrimary, variant === "secondary" && styles.variantSecondary, variant === "danger" && styles.variantDanger, disabled && styles.buttonDisabled);
    const rootProps = getRootProps({
        ...styleXProps,
        className: className
            ? `${className} ${styleXProps.className}`
            : styleXProps.className,
        "data-optiui": true,
        ...other,
        ref: (instance) => {
            buttonRef.current = instance;
            if (typeof forwardedRef === "function") {
                forwardedRef(instance);
            }
            else if (forwardedRef) {
                forwardedRef.current = instance;
            }
        },
    });
    if (ButtonComponent === "a") {
        rootProps.href = disabled
            ? undefined
            : href || to;
    }
    else if (ButtonComponent === "button" &&
        !rootProps.type) {
        rootProps.type = "button";
    }
    return _jsx(ButtonComponent, { ...rootProps, children: children });
});
export { Button };
Button.displayName = "Button";
