import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { dataReducer } from "../reducers/dataReducer";
import sagaManageUser from "../saga/sagaManageUser";
const sagaMiddleware=createSagaMiddleware();
const store=createStore(
    dataReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagaManageUser);
export default store;
