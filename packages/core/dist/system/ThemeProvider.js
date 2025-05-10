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
    const [theme, setThemeState] = useState("system"); // 초기값은 'system'으로 설정
    const [resolvedTheme, setResolvedTheme] = useState(null);
    const [mounted, setMounted] = useState(false);
    // 마운트 후 (클라이언트 사이드) localStorage에서 초기 테마 상태를 불러옴
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark" || storedTheme === "light") {
            setThemeState(storedTheme);
        }
        setMounted(true);
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        updateResolvedTheme(media, theme);
    }, []); // 빈 의존성 배열로 마운트 시 한 번만 실행
    // 현재 resolvedTheme 상태 업데이트 함수
    const updateResolvedTheme = useCallback((media, currentTheme) => {
        const systemTheme = media.matches ? "dark" : "light";
        setResolvedTheme(currentTheme === "system"
            ? systemTheme
            : currentTheme);
    }, [theme]);
    // 시스템 테마 변경 감지
    useEffect(() => {
        if (!mounted)
            return;
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            updateResolvedTheme(media, theme);
        };
        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, [mounted, theme, updateResolvedTheme]);
    // 테마 변경 적용 및 로컬 스토리지 업데이트
    useEffect(() => {
        if (!mounted || resolvedTheme === null)
            return;
        const root = document.documentElement;
        if (resolvedTheme === "dark") {
            root.classList.add("dark");
            root.style.colorScheme = "dark";
            localStorage.setItem("theme", "dark");
        }
        else {
            root.classList.remove("dark");
            root.style.colorScheme = "light";
            localStorage.setItem("theme", "light");
        }
    }, [mounted, resolvedTheme]);
    // 테마 변경 함수 (useTheme 훅에서 사용)
    const setTheme = useCallback((newTheme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        // resolvedTheme은 useEffect에서 theme 변경에 따라 자동으로 업데이트됨
    }, []);
    // 컨텍스트 값 메모이제이션
    const contextValue = useMemo(() => ({
        theme,
        resolvedTheme,
        setTheme,
    }), [theme, resolvedTheme, setTheme]);
    // next-themes처럼 내부 스크립트를 주입하는 방식 (서버 사이드 렌더링 고려)
    return (_jsxs(ThemeContext.Provider, { value: contextValue, children: [typeof window === "undefined" && _jsx(ThemeScript, {}), children] }));
};
export const useTheme = () => React.useContext(ThemeContext);
