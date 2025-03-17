export declare const buttonBase: string;
export declare const buttonRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        primary: {
            backgroundColor: string;
            color: "white";
            borderColor: string;
            boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${string}, inset 0 -2px 1px ${string}`;
            ":hover": {
                backgroundColor: string;
            };
            ":active": {
                backgroundColor: string;
                boxShadow: "none";
                transform: "scale(0.99)";
            };
            ":focusVisible": {
                boxShadow: string;
                outline: string;
            };
        };
        secondary: {
            backgroundColor: string;
            color: "white";
            borderColor: string;
            boxShadow: `0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px ${string}, inset 0 -2px 1px ${string}`;
            ":hover": {
                backgroundColor: string;
            };
            ":active": {
                backgroundColor: string;
                boxShadow: "none";
                transform: "scale(0.99)";
            };
            ":focusVisible": {
                boxShadow: string;
                outline: string;
            };
        };
        danger: {
            backgroundColor: "red";
            color: "white";
            borderColor: "red";
            boxShadow: "0 2px 1px rgba(45, 45, 60, 0.2), inset 0 1.5px 1px #ff6666, inset 0 -2px 1px #b30000";
            ":hover": {
                backgroundColor: "#b30000";
            };
            ":active": {
                backgroundColor: "#800000";
                boxShadow: "none";
                transform: "scale(0.99)";
            };
            ":focusVisible": {
                boxShadow: string;
                outline: string;
            };
        };
    };
    disabled: {
        true: {
            backgroundColor: string;
            color: string;
            borderColor: "transparent";
            cursor: "not-allowed";
            boxShadow: "none";
            transform: "scale(1)";
        };
    };
}>;
export declare const inputRecipe: import("@vanilla-extract/recipes").RuntimeFn<{
    variant: {
        outlined: {
            border: `1px solid ${string}`;
            backgroundColor: "white";
            ":hover": {
                borderColor: string;
            };
            ":focus": {
                borderColor: string;
                boxShadow: `0 0 0 3px ${string}`;
            };
        };
        filled: {
            backgroundColor: string;
            border: "none";
            ":hover": {
                backgroundColor: string;
            };
            ":focus": {
                backgroundColor: string;
            };
        };
    };
    error: {
        true: {
            borderColor: "red";
            boxShadow: "0 0 0 3px rgba(255, 0, 0, 0.2)";
        };
    };
    disabled: {
        true: {
            backgroundColor: string;
            color: string;
            cursor: "not-allowed";
            borderColor: string;
            boxShadow: "none";
        };
    };
    darkMode: {
        true: {
            color: string;
            backgroundColor: string;
            borderColor: string;
            boxShadow: `0px 2px 2px ${string}`;
            ":hover": {
                borderColor: string;
            };
            ":focus": {
                borderColor: string;
                boxShadow: `0 0 0 3px ${string}`;
            };
        };
    };
}>;
