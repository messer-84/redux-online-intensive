// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { createPost, fillPosts, removePost } from './workers';

export function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

export function* watchRemovePost () {
    yield takeEvery(types.DELETE_POST_ASYNC, removePost);
}

export function* watchFillPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fillPosts);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFillPosts), call(watchRemovePost)]);
}
