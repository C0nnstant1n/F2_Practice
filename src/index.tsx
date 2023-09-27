import * as React from "react";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(changeStore)

function changeStore(state = [], action {
    switch (action.type) {
        case 'WRITE':
            return [
                ...state,
                action.payload
            ]
        break;
        default:
            return state
    }
});

root.render(
  <Provider store={store}>
    <Main />
  </Provider>
);
