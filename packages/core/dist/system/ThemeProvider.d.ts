import React from "react";
type Theme = "light" | "dark" | "system";
type ThemeContextType = {
    theme: Theme;
    resolvedTheme: "light" | "dark" | null;
    setTheme: (theme: Theme) => void;
};
export declare const ThemeProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
