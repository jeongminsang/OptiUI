export declare const styles: Readonly<{
    readonly buttonBase: Readonly<{
        readonly fontFamily: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"fontFamily", "'IBM Plex Sans', sans-serif">;
        readonly fontWeight: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"fontWeight", 600>;
        readonly fontSize: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"fontSize", "0.875rem">;
        readonly lineHeight: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"lineHeight", 1.5>;
        readonly padding: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"padding", "8px 16px">;
        readonly borderRadius: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderRadius", "8px">;
        readonly cursor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"cursor", "pointer">;
        readonly transition: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"transition", "all 150ms ease">;
        readonly border: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"border", "1px solid">;
        readonly outline: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"outline", "none">;
        readonly textAlign: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"textAlign", "center">;
    }>;
    readonly variantPrimary: Readonly<{
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", string>;
        readonly color: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"color", "white">;
        readonly borderColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderColor", string>;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${string}, inset 0 -2px 1px ${string}`>;
        readonly ':hover': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":hover", {
            readonly backgroundColor: string;
        }>;
        readonly ':active': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":active", {
            readonly backgroundColor: string;
            readonly boxShadow: "none";
            readonly transform: "scale(0.99)";
        }>;
        readonly ':focus-visible': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus-visible", {
            readonly boxShadow: `0 0 0 4px ${string}`;
            readonly outline: "none";
        }>;
    }>;
    readonly variantSecondary: Readonly<{
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", string>;
        readonly color: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"color", "white">;
        readonly borderColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderColor", string>;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${string}, inset 0 -2px 1px ${string}`>;
        readonly ':hover': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":hover", {
            readonly backgroundColor: string;
        }>;
        readonly ':active': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":active", {
            readonly backgroundColor: string;
            readonly boxShadow: "none";
            readonly transform: "scale(0.99)";
        }>;
        readonly ':focus-visible': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus-visible", {
            readonly boxShadow: `0 0 0 4px ${string}`;
            readonly outline: "none";
        }>;
    }>;
    readonly variantDanger: Readonly<{
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", "red">;
        readonly color: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"color", "white">;
        readonly borderColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderColor", "red">;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", "0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px #ff6666, inset 0 -2px 1px #b30000">;
        readonly ':hover': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":hover", {
            readonly backgroundColor: "#b30000";
        }>;
        readonly ':active': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":active", {
            readonly backgroundColor: "#800000";
            readonly boxShadow: "none";
            readonly transform: "scale(0.99)";
        }>;
        readonly ':focus-visible': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus-visible", {
            readonly boxShadow: "0 0 0 4px #ffcccc";
            readonly outline: "none";
        }>;
    }>;
    readonly buttonDisabled: Readonly<{
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", string>;
        readonly color: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"color", string>;
        readonly borderColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderColor", "transparent">;
        readonly cursor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"cursor", "not-allowed">;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", "none">;
        readonly transform: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"transform", "scale(1)">;
    }>;
    readonly inputBase: Readonly<{
        readonly width: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"width", "320px">;
        readonly fontFamily: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"fontFamily", "'IBM Plex Sans', sans-serif">;
        readonly fontSize: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"fontSize", "0.875rem">;
        readonly fontWeight: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"fontWeight", 400>;
        readonly lineHeight: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"lineHeight", 1.5>;
        readonly padding: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"padding", "8px 12px">;
        readonly borderRadius: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderRadius", "8px">;
        readonly border: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"border", `1px solid ${string}`>;
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", "#fff">;
        readonly color: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"color", string>;
        readonly transition: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"transition", "border-color 0.2s ease, box-shadow 0.2s ease">;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", `0px 2px 2px ${string}`>;
        readonly ':hover': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":hover", {
            readonly borderColor: string;
        }>;
        readonly ':focus': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus", {
            readonly borderColor: string;
            readonly boxShadow: `0 0 0 3px ${string}`;
        }>;
        readonly ':focus-visible': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus-visible", {
            readonly outline: "none";
        }>;
    }>;
    readonly inputOutlined: Readonly<{
        readonly border: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"border", `1px solid ${string}`>;
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", "white">;
        readonly ':hover': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":hover", {
            readonly borderColor: string;
        }>;
        readonly ':focus': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus", {
            readonly borderColor: string;
            readonly boxShadow: `0 0 0 3px ${string}`;
        }>;
    }>;
    readonly inputFilled: Readonly<{
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", string>;
        readonly border: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"border", "none">;
        readonly ':hover': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":hover", {
            readonly backgroundColor: string;
        }>;
        readonly ':focus': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus", {
            readonly backgroundColor: string;
        }>;
    }>;
    readonly inputError: Readonly<{
        readonly borderColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderColor", "red">;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", "0 0 0 3px rgba(255, 0, 0, 0.2)">;
    }>;
    readonly inputDisabled: Readonly<{
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", string>;
        readonly color: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"color", string>;
        readonly cursor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"cursor", "not-allowed">;
        readonly borderColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderColor", string>;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", "none">;
    }>;
    readonly inputDarkMode: Readonly<{
        readonly color: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"color", string>;
        readonly backgroundColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"backgroundColor", string>;
        readonly borderColor: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"borderColor", string>;
        readonly boxShadow: import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<"boxShadow", `0px 2px 2px ${string}`>;
        readonly ':hover': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":hover", {
            readonly borderColor: string;
        }>;
        readonly ':focus': import("@stylexjs/stylex/lib/StyleXTypes").StyleXClassNameFor<":focus", {
            readonly borderColor: string;
            readonly boxShadow: `0 0 0 3px ${string}`;
        }>;
    }>;
}>;
