import { ComponentPropsWithRef, ElementType, FocusEventHandler, ReactElement, ReactNode } from "react";
export type PolymorphicComponentProps<T extends ElementType, Props = object> = Props & Omit<ComponentPropsWithRef<T>, keyof Props> & {
    as?: T;
};
export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];
export type PolymorphicComponent<C extends ElementType, Props = object> = {
    <T extends ElementType = C>(props: PolymorphicComponentProps<T, Props>): ReactElement | null;
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
};
export type ButtonOwnerState = {
    active: boolean;
    focusVisible: boolean;
} & ButtonBaseProps;
declare const Button: PolymorphicComponent<"button", ButtonBaseProps>;
export { Button };
