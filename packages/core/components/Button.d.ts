import { ComponentPropsWithRef, ElementType, FocusEventHandler, ReactElement, ReactNode } from "react";
import { buttonRecipe } from "../style.css.js";
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
} & ButtonVariants;
export type ButtonOwnerState = {
    active: boolean;
    focusVisible: boolean;
} & ButtonBaseProps;
export type ButtonVariants = Parameters<typeof buttonRecipe>[0];
declare const Button: PolymorphicComponent<"button", ButtonBaseProps>;
export { Button };
