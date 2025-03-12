"use client";
import * as React from "react";
import { forwardRef, useEffect, useState } from "react";

// 다형성 컴포넌트를 위한 타입
export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = object
> = Props &
  Omit<React.ComponentPropsWithRef<T>, keyof Props> & {
    as?: T;
  };

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponent<
  C extends React.ElementType,
  Props = object
> = {
  <T extends React.ElementType = C>(
    props: PolymorphicComponentProps<T, Props>
  ): React.ReactElement | null;
  displayName?: string;
};

// 기본 Button Props
export interface ButtonBaseProps {
  /**
   * Button 내용
   */
  children?: React.ReactNode;
  /**
   * 클래스 이름
   */
  className?: string;
  /**
   * 비활성화 여부
   * @default false
   */
  disabled?: boolean;
  /**
   * 비활성화 상태에서도 포커스를 받을 수 있는지 여부
   * @default false
   */
  focusableWhenDisabled?: boolean;
  /**
   * href 속성 (링크일 경우)
   */
  href?: string;
  /**
   * 포커스가 표시될 때 호출되는 콜백
   */
  onFocusVisible?: React.FocusEventHandler;
  /**
   * 라우터 링크의 to 속성 (React Router 등에서 사용)
   */
  to?: string;
}

// Button Props 타입
export type ButtonProps<RootComponentType extends React.ElementType> =
  PolymorphicComponentProps<RootComponentType, ButtonBaseProps>;

// Button 소유 상태 타입
export interface ButtonOwnerState extends ButtonBaseProps {
  active: boolean;
  focusVisible: boolean;
}

// 유틸리티 함수
function composeClasses(
  slots: Record<string, (string | boolean | undefined)[]>
): Record<string, string> {
  const result: Record<string, string> = {};

  Object.entries(slots).forEach(([slot, classNames]) => {
    result[slot] = classNames.filter(Boolean).join(" ");
  });

  return result;
}

// 이벤트 핸들러를 위한 타입
// type EventHandlers = Record<string, React.EventHandler<React.SyntheticEvent>>;

function useButton(params: {
  disabled?: boolean;
  focusableWhenDisabled?: boolean;
  href?: string;
  to?: string;
  [key: string]: unknown;
}) {
  const { disabled = false, focusableWhenDisabled = false } = params;

  const [active, setActive] = useState(false);
  const [focusVisible, setFocusVisible] = useState(false);

  const handleMouseDown = () => setActive(true);
  const handleMouseUp = () => setActive(false);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === " " || event.key === "Enter") {
      setActive(true);
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent) => {
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

  const getRootProps = <
    TOther extends Record<string, unknown> = Record<string, unknown>
  >(
    otherHandlers: TOther = {} as TOther
  ) => {
    const buttonProps: Record<string, unknown> = {
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

    // 다른 핸들러들 추가
    Object.keys(otherHandlers).forEach((key) => {
      if (
        key.startsWith("on") &&
        typeof otherHandlers[key as keyof TOther] === "function"
      ) {
        const originalHandler = buttonProps[key] as
          | React.EventHandler<React.SyntheticEvent>
          | undefined;
        buttonProps[key] = (event: React.SyntheticEvent) => {
          originalHandler?.(event);
          if (!disabled || key === "onBlur") {
            (
              otherHandlers[
                key as keyof TOther
              ] as React.EventHandler<React.SyntheticEvent>
            )(event);
          }
        };
      } else {
        buttonProps[key] = otherHandlers[key as keyof TOther];
      }
    });

    return buttonProps as React.HTMLAttributes<HTMLElement>;
  };

  return {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps,
  };
}

/**
 * 간소화된 Button 컴포넌트
 */
const Button = forwardRef(function Button<
  RootComponentType extends React.ElementType = "button"
>(
  props: ButtonProps<RootComponentType>,
  forwardedRef: React.ForwardedRef<Element>
) {
  const {
    children,
    className,
    disabled = false,
    focusableWhenDisabled = false,
    href,
    to,
    as,
    ...other
  } = props;

  const buttonRef = React.useRef<HTMLElement>(null);

  // 기본 엘리먼트를 결정합니다 (href나 to가 있으면 a 태그, 없으면 button 태그)
  const Component = as || (href || to ? "a" : "button");

  const { active, focusVisible, getRootProps } = useButton({
    disabled,
    focusableWhenDisabled,
    href,
    to,
  });

  // const ownerState: ButtonOwnerState = {
  //   ...props,
  //   active,
  //   focusVisible,
  // };

  // 클래스 이름 생성
  const classes = composeClasses({
    root: [
      className,
      "button",
      disabled && "disabled",
      focusVisible && "focusVisible",
      active && "active",
    ],
  });

  const rootProps = getRootProps({
    className: classes.root,
    ...other,
    ref: (instance: HTMLElement | null) => {
      buttonRef.current = instance;
      if (typeof forwardedRef === "function") {
        forwardedRef(instance);
      } else if (forwardedRef) {
        (forwardedRef as React.MutableRefObject<HTMLElement | null>).current =
          instance;
      }
    },
  });

  if (Component === "a") {
    (rootProps as React.AnchorHTMLAttributes<HTMLAnchorElement>).href = disabled
      ? undefined
      : href || to;
  } else if (
    Component === "button" &&
    !(rootProps as React.ButtonHTMLAttributes<HTMLButtonElement>).type
  ) {
    (rootProps as React.ButtonHTMLAttributes<HTMLButtonElement>).type =
      "button";
  }

  return <Component {...rootProps}>{children}</Component>;
}) as PolymorphicComponent<"button", ButtonBaseProps>;

Button.displayName = "Button";

export { Button };
