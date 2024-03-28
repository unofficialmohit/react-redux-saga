import {put,takeEvery} from "redux-saga/effects";
//this commented one will called immediatly as React app loads because we give sagaManage
//direct to middleware run function in store.js
// function* sagaManageUser(){
// let data=yield fetch('https://jsonplaceholder.typicode.com/users');
// data=yield data.json();
// yield put({type:"FETCH",payload:data})
// }

function* sagaManageUser(){
yield takeEvery("FETCH_REQUEST",getUser)
}
function* getUser(){
    let data=yield fetch('https://jsonplaceholder.typicode.com/users');
    data=yield data.json();
    yield put({type:"FETCH",payload:data})
}
export default sagaManageUser;