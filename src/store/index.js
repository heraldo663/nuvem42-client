import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./ducks";
import sagas from "./sagas";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware(sagaMonitor);

const middlewares = [sagaMiddleware];

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

export default createStore(reducer, composer);

sagaMiddleware.run(sagas);
