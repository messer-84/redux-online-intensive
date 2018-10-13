// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchPosts } from '../bus/posts/saga/watchers';

export function* rootSaga () {
    console.log('root saga');

    yield all([call(watchPosts)]);

}
