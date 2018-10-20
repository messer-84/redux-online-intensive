// Types
import { types } from './types';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type:    types.FILL_POSTS,
            payload: posts,
        };
    },

    createPost: (comment) => {
        return {
            type:    types.CREATE_POST,
            payload: comment,
        };
    },
    removePost: (id) => {
        return {
            type:    types.DELETE_POST,
            payload: id,
        };
    },
    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },

    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },

    createPostAsync: (comment) => {
        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },
    removePostAsync: (id) => {
        return {
            type:    types.DELETE_POST_ASYNC,
            payload: id,
        };
    },
};
