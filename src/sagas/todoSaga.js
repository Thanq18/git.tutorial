// todosaga 
import { put, takeEvery, call,all } from 'redux-saga/effects';
import { FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST,SAVE_TODO_REQUEST, SAVE_TODO_SUCCESS, SAVE_TODO_FAILURE,DELETE_TODO_REQUEST,DELETE_TODO_SUCCESS ,DELETE_TODO_FAILURE } from '../actions/todoActions';
import {fetchTodosApi, saveTodoApi,deleteTodoApi } from '../api/todoApi';

// Hàm gọi API 
function* fetchTodos() {
    try {
        const todoApi = yield call(fetchTodosApi); 
        yield put({ type: FETCH_TODOS_SUCCESS, payload: todoApi }); 
    } catch (error) {
        yield put({ type: FETCH_TODOS_FAILURE, error }); 
    }
};
// Hàm gọi API để lưu todo mới
function* saveTodo(action) {
    try {
        const savedTodo = yield call(saveTodoApi, action.payload);
       yield put({ type: SAVE_TODO_SUCCESS, payload: savedTodo });
    } catch (error) {
        yield put({ type: SAVE_TODO_FAILURE, error });
    }
}

// Hàm gọi API để xóa todo 
function* deleteTodo(action) {
    try {
        yield call(deleteTodoApi, action.payload);
        yield put({ type: DELETE_TODO_SUCCESS, payload: action.payload });
    } catch (error) {
        yield put({ type: DELETE_TODO_FAILURE, error });
    }
}

function* watchFetchTodos() {
    yield takeEvery(FETCH_TODOS_REQUEST, fetchTodos);
}
function* watchSaveTodo() {
    yield takeEvery(SAVE_TODO_REQUEST, saveTodo);
}
function* watchDeleteTodo() {
    yield takeEvery(DELETE_TODO_REQUEST, deleteTodo);
}


export default function* rootSaga() {
    yield all([
        watchFetchTodos(),
        watchSaveTodo(),
        watchDeleteTodo()
    ]);
}

