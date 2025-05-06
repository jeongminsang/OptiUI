"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { createContext, useState, useEffect, useCallback, useMemo, } from "react";
// 안전한 기본 컨텍스트 값
const ThemeContext = createContext({
    theme: "system",
    resolvedTheme: null,
    setTheme: () => { },
});
const themeScript = () => `
(function() {
  // 시스템 테마 확인 및 적용
  function applySystemTheme() {
    const root = document.documentElement;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }

  // 시스템 테마 기반으로 초기 테마 적용
  applySystemTheme();
})();
`;
// 스크립트 삽입 컴포넌트
const ThemeScript = React.memo(() => {
    return (_jsx("script", { id: 'theme-script', dangerouslySetInnerHTML: { __html: themeScript() }, suppressHydrationWarning: true }));
});
export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState("system");
    const [resolvedTheme, setResolvedTheme] = useState(null);
    const [mounted, setMounted] = useState(false);
    // 마운트 감지 및 초기 상태 설정
    useEffect(() => {
        setMounted(true);
        // 실제 적용될 테마 결정
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        updateResolvedTheme(media);
    }, []);
    // 현재 resolvedTheme 상태 업데이트 함수
    const updateResolvedTheme = useCallback((media) => {
        const systemTheme = media.matches ? "dark" : "light";
        setResolvedTheme(theme === "system" ? systemTheme : theme);
    }, [theme]);
    // 시스템 테마 변경 감지
    useEffect(() => {
        if (!mounted)
            return;
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        // 초기 상태 설정
        updateResolvedTheme(media);
        const handleChange = () => {
            updateResolvedTheme(media);
        };
        // 이벤트 리스너 등록
        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, [mounted, theme, updateResolvedTheme]);
    // 테마 변경 적용
    useEffect(() => {
        if (!mounted || resolvedTheme === null)
            return;
        const root = document.documentElement;
        if (resolvedTheme === "dark") {
            root.classList.add("dark");
            root.style.colorScheme = "dark";
        }
        else {
            root.classList.remove("dark");
            root.style.colorScheme = "light";
        }
    }, [mounted, resolvedTheme]);
    // 테마 변경 함수
    const setTheme = useCallback((newTheme) => {
        if (!mounted)
            return;
        setThemeState(newTheme);
    }, [mounted]);
    // 컨텍스트 값 메모이제이션
    const contextValue = useMemo(() => ({
        theme,
        resolvedTheme,
        setTheme,
    }), [theme, resolvedTheme, setTheme]);
    // next-themes처럼 내부 스크립트를 주입하는 방식
    return (_jsxs(ThemeContext.Provider, { value: contextValue, children: [typeof window === "undefined" && _jsx(ThemeScript, {}), children] }));
};
