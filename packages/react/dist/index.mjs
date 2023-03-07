// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000"
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx("h1", { style: { color: colors.black }, children: "Hello World" });
}
export {
  App
};
