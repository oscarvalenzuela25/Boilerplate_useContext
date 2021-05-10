import { useReducer } from 'react';
import PostsReducer from '../reducers/PostsReducer';
import {
	FETCH_POSTS_START,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_FAILURE,
	FETCH_POST_START,
	FETCH_POST_SUCCESS,
	FETCH_POST_FAILURE,
} from '../../constans/types';
import axios from 'axios';

// Esto es para la opcion que PostAction funcione como HO
// export const PostContext = createContext();

const usePostsAction = () => {
	const initialState = {
		posts: [],
		fetchPostsIsLoading: false,
		fetchPostsError: null,

		post: {},
		fetchPostIsLoading: false,
		fetchPostError: null,
	};
	const [state, dispatch] = useReducer(PostsReducer, initialState);

	const fetchPosts = () => {
		dispatch({
			type: FETCH_POSTS_START,
		});
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				const resData = res.data;
				dispatch({
					type: FETCH_POSTS_SUCCESS,
					payload: resData,
				});
			})
			.catch(error => {
				dispatch({
					type: FETCH_POSTS_FAILURE,
					payload: error.message,
				});
			});
	};

	const fetchPost = postId => {
		dispatch({
			type: FETCH_POST_START,
		});
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(res => {
				const resData = res.data;
				dispatch({
					type: FETCH_POST_SUCCESS,
					payload: resData,
				});
			})
			.catch(error => {
				dispatch({
					type: FETCH_POST_FAILURE,
					payload: error.message,
				});
			});
	};

	// Opcion 1 entregar la informacion como si fuera un hooks y centrarla en un rootAction
	return {
		state,
		actions: { fetchPosts, fetchPost },
	};

	// Opcion 2, entregar la informacion con un provider y este quedaria como HOC en el Index.js
	// return (
	// 	<PostContext.Provider value={postAction}>
	// 		{props.children}
	// 	</PostContext.Provider>
	// );
};

export default usePostsAction;
