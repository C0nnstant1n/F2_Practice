import * as React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/Main/Main";

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
