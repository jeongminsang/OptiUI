import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentPropsWithRef,
  ElementType,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { buttonRecipe } from "../style.css";
import { RecipeVariants } from "@vanilla-extract/recipes";

export type PolymorphicComponentProps<
  T extends ElementType,
  Props = object
> = Props &
  Omit<ComponentPropsWithRef<T>, keyof Props> & {
    as?: T;
  };

export type PolymorphicRef<T extends ElementType> =
  ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponent<C extends ElementType, Props = object> = {
  <T extends ElementType = C>(
    props: PolymorphicComponentProps<T, Props>
  ): ReactElement | null;
  displayName?: string;
};

export type ButtonBaseProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  focusableWhenDisabled?: boolean;
  href?: string;
  onFocusVisible?: FocusEventHandler;
  to?: string;
} & ButtonVariants;

export type ButtonOwnerState = {
  active: boolean;
  focusVisible: boolean;
} & ButtonBaseProps;

type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

type ButtonProps<RootComponentType extends ElementType = "button"> = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  focusableWhenDisabled?: boolean;
  href?: string;
  to?: string;
  as?: RootComponentType;
} & ButtonVariants;

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
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " " || event.key === "Enter") {
      setActive(true);
    }
  };
  const handleKeyUp = (event: KeyboardEvent) => {
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

    Object.keys(otherHandlers).forEach((key) => {
      if (
        key.startsWith("on") &&
        typeof otherHandlers[key as keyof TOther] === "function"
      ) {
        const originalHandler = buttonProps[key] as
          | ((event: SyntheticEvent) => void)
          | undefined;
        buttonProps[key] = (event: SyntheticEvent) => {
          originalHandler?.(event);
          if (!disabled || key === "onBlur") {
            (
              otherHandlers[key as keyof TOther] as (
                event: SyntheticEvent
              ) => void
            )(event);
          }
        };
      } else {
        buttonProps[key] = otherHandlers[key as keyof TOther];
      }
    });

    return buttonProps as HTMLAttributes<HTMLElement>;
  };

  return {
    active,
    focusVisible,
    setFocusVisible,
    getRootProps,
  };
}

const Button = forwardRef(function Button<
  RootComponentType extends ElementType = "button"
>(props: ButtonProps<RootComponentType>, forwardedRef: ForwardedRef<Element>) {
  const {
    children,
    className,
    disabled = false,
    focusableWhenDisabled = false,
    href,
    to,
    as,
    variant = "primary",
    ...other
  } = props;

  const buttonRef = useRef<HTMLElement>(null);
  const ButtonComponent = as || (href || to ? "a" : "button");

  const { getRootProps } = useButton({
    disabled,
    focusableWhenDisabled,
    href,
    to,
    variant,
  });

  const rootProps = getRootProps({
    className: `${buttonRecipe({ variant, disabled })} ${className || ""}`,
    ...other,
    ref: (instance: HTMLElement | null) => {
      buttonRef.current = instance;
      if (typeof forwardedRef === "function") {
        forwardedRef(instance);
      } else if (forwardedRef) {
        forwardedRef.current = instance;
      }
    },
  });

  if (ButtonComponent === "a") {
    (rootProps as AnchorHTMLAttributes<HTMLAnchorElement>).href = disabled
      ? undefined
      : href || to;
  } else if (
    ButtonComponent === "button" &&
    !(rootProps as ButtonHTMLAttributes<HTMLButtonElement>).type
  ) {
    (rootProps as ButtonHTMLAttributes<HTMLButtonElement>).type = "button";
  }

  return <ButtonComponent {...rootProps}>{children}</ButtonComponent>;
}) as PolymorphicComponent<"button", ButtonBaseProps>;

export { Button };

Button.displayName = "Button";
