import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE,
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
	FETCH_POST_FAILURE,
} from '../../constans/types';

const fetchPostsStart = state => {
	return {
		...state,
		posts: [],
		fetchPostsIsLoading: true,
	};
};
const fetchPostsSuccess = (state, payload) => {
	return {
		...state,
		posts: payload,
		fetchPostsIsLoading: false,
	};
};
const fetchPostsFailure = (state, payload) => {
	return {
		...state,
		fetchPostsError: payload.error,
		fetchPostsIsLoading: false,
	};
};

const fetchPostStart = state => {
	return {
		...state,
		post: {},
		fetchPostIsLoading: true,
	};
};
const fetchPostSuccess = (state, payload) => {
	return {
		...state,
		post: payload,
		fetchPostIsLoading: false,
	};
};
const fetchPostFailure = (state, payload) => {
	return {
		...state,
		fetchPostError: payload.error,
		fetchPostIsLoading: false,
	};
};

const PostsReducer = (state, { type, payload }) => {
	switch (type) {
		case FETCH_POSTS_START:
			return fetchPostsStart(state);
		case FETCH_POSTS_SUCCESS:
			return fetchPostsSuccess(state, payload);
		case FETCH_POSTS_FAILURE:
			return fetchPostsFailure(state, payload);

		case FETCH_POST_START:
			return fetchPostStart(state);
		case FETCH_POST_SUCCESS:
			return fetchPostSuccess(state, payload);
		case FETCH_POST_FAILURE:
			return fetchPostFailure(state, payload);
		default:
			return state;
	}
};

export default PostsReducer;
