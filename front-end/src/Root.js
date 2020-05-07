import React from "react";
import App from "components/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import base from "stores/base";

import { createLogger } from "redux-logger";
import { default as ReduxThunk } from "redux-thunk";
import { createPromise } from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

let middleware;

const pm = createPromise({
    promiseTypeSuffixes: ["LOADING", "SUCCESS", "ERROR"],
});

if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middleware = composeWithDevTools(applyMiddleware(logger, ReduxThunk, pm));
} else {
    middleware = applyMiddleware(ReduxThunk, pm);
}

const store = createStore(base, middleware);

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default Root;
