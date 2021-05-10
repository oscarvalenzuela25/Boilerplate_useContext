import {
	FETCH_COMMENTS_START,
	FETCH_COMMENTS_SUCCESS,
	FETCH_COMMENTS_FAILURE,
} from '../../constans/types';

const fetchCommentsStart = state => {
	return {
		...state,
		comments: [],
		fetchCommentsIsLoading: true,
		fetchCommentsError: null,
	};
};

const fetchCommentsSucces = (state, payload) => {
	return {
		...state,
		comments: payload,
		fetchCommentsIsLoading: false,
	};
};

const fetchCommentsFailure = (state, payload) => {
	return {
		...state,
		fetchCommentsIsLoading: false,
		fetchCommentsError: payload.error,
	};
};

const CommentsReducer = (state, { type, payload }) => {
	switch (type) {
		case FETCH_COMMENTS_START:
			return fetchCommentsStart(state);
		case FETCH_COMMENTS_SUCCESS:
			return fetchCommentsSucces(state, payload);
		case FETCH_COMMENTS_FAILURE:
			return fetchCommentsFailure(state, payload);
		default:
			return state;
	}
};

export default CommentsReducer;
