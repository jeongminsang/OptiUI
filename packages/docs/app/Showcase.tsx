"use client";

import "@minsang/opti-ui/styles";
import { Button, Input } from "@minsang/opti-ui/components";
import { useTheme } from "nextra-theme-docs";

function Playground({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        background: "rgba(135, 135, 135, 0.2)",
        borderRadius: 10,
        marginTop: 25,
      }}
    >
      {children}
    </div>
  );
}

export function ButtonRender() {
  return (
    <Playground>
      <Button>Button</Button>
    </Playground>
  );
}

export function InputRender() {
  return (
    <Playground>
      <Input placeholder='Input example' />
    </Playground>
  );
}

export function UseThemeRender() {
  const { theme, setTheme } = useTheme();
  return (
    <Playground>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </Button>
    </Playground>
  );
}
