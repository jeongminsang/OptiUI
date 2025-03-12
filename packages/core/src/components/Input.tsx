"use client";
import * as React from "react";
import { forwardRef, useState } from "react";

// 핵심 타입 정의
// interface InputOwnerState {
//   disabled?: boolean;
//   error?: boolean;
//   focused?: boolean;
//   multiline?: boolean;
//   startAdornment?: React.ReactNode;
//   endAdornment?: React.ReactNode;
//   type?: string;
// }

interface InputProps {
  // 기본 HTML 속성
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

  // 커스텀 속성
  error?: boolean;
  multiline?: boolean;
  rows?: number;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;

  // 이벤트 핸들러
  onClick?: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

// 유틸리티 함수
const combineClassNames = (
  ...classes: (string | undefined | boolean | null)[]
): string => {
  return classes
    .filter((cls): cls is string => typeof cls === "string" && cls !== "")
    .join(" ");
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
    ...other
  } = props;

  // 상태 관리
  const [focused, setFocused] = useState(false);

  // 이벤트 핸들러
  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFocused(false);
    onBlur?.(event);
  };

  // 입력 타입 설정
  const type = !multiline ? typeProp ?? "text" : undefined;

  // 상태 객체
  // const ownerState: InputOwnerState = {
  //   disabled,
  //   error,
  //   focused,
  //   multiline,
  //   type,
  //   startAdornment,
  //   endAdornment,
  // };

  // 클래스 이름 구성
  const rootClassName = combineClassNames(
    "input-root",
    disabled ? "input-disabled" : "",
    error ? "input-error" : "",
    focused ? "input-focused" : "",
    multiline ? "input-multiline" : "",
    startAdornment ? "input-adorned-start" : "",
    endAdornment ? "input-adorned-end" : "",
    className || ""
  );

  const inputClassName = combineClassNames(
    "input-input",
    disabled ? "input-input-disabled" : "",
    multiline ? "input-input-multiline" : ""
  );

  // 기본 props
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
    className: inputClassName,
  };

  // 컴포넌트 렌더링
  const InputComponent = multiline ? "textarea" : "input";

  return (
    <div className={rootClassName} ref={ref} {...other}>
      {startAdornment}
      <InputComponent {...inputProps} />
      {endAdornment}
    </div>
  );
});

// 명확한 표시를 위한 디스플레이 이름 설정
Input.displayName = "Input";
