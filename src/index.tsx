import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import "./css/index.css";
import App from "./react/App";
import store from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root")
);
