import {
  ChangeEventHandler,
  FocusEventHandler,
  FocusEvent,
  forwardRef,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  // useState,
} from "react";
import { inputRecipe } from "../style.css";

type InputProps = {
  "aria-describedby"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string | number | readonly string[];
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string | number | readonly string[];
  type?: string;
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  variant?: "outlined" | "filled";
  darkMode?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled = false,
    endAdornment,
    error = false,
    id,
    multiline = false,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    startAdornment,
    value,
    type: typeProp,
    rows,
    variant = "outlined",
    darkMode = false,
    ...other
  } = props;

  // const [focused, setFocused] = useState(false);

  const handleFocus = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setFocused(false);
    onBlur?.(event);
  };

  const type = !multiline ? typeProp ?? "text" : undefined;

  const rootProps = `${inputRecipe({
    variant,
    error,
    disabled,
    darkMode,
  })} ${className || ""}`;

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
  };

  const InputComponent = multiline ? "textarea" : "input";

  return (
    <div ref={ref} {...other}>
      {startAdornment}
      <InputComponent {...inputProps} />
      {endAdornment}
    </div>
  );
});

Input.displayName = "Input";
