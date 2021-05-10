import { useReducer } from 'react';
import CommentsReducer from '../reducers/CommentsReducer';
import {
	FETCH_COMMENTS_START,
	FETCH_COMMENTS_SUCCESS,
	FETCH_COMMENTS_FAILURE,
} from '../../constans/types';
import axios from 'axios';

const useCommentsAction = () => {
	const initialState = {
		comments: [],
		fetchCommentsIsLoading: false,
		fetchCommentsError: null,
	};
	const [state, dispatch] = useReducer(CommentsReducer, initialState);

	const fetchComments = postId => {
		dispatch({
			type: FETCH_COMMENTS_START,
		});
		axios
			.get(
				`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
			)
			.then(res => {
				const resData = res.data;
				dispatch({
					type: FETCH_COMMENTS_SUCCESS,
					payload: resData,
				});
			})
			.catch(error => {
				dispatch({
					type: FETCH_COMMENTS_FAILURE,
					payload: error.message,
				});
			});
	};
	return {
		state,
		actions: { fetchComments },
	};
};

export default useCommentsAction;
