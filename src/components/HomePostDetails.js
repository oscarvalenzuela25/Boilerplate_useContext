import React, { useState, useEffect } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import useRootContext from '../hooks/useRootContext';
import { useParams } from 'react-router-dom';

const HomePostDetails = () => {
	const { postId } = useParams();
	const { posts } = useRootContext();
	const { state, actions } = posts;

	const [postData, setPostData] = useState({});

	useEffect(() => {
		actions.fetchPost(postId);
		// eslint-disable-next-line  react-hooks/exhaustive-deps
	}, [postId]);

	useEffect(() => {
		setPostData(state.post);
	}, [state.post]);

	return (
		<Grid container>
			<Grid item xs={12} style={{ marginBottom: 20 }}>
				<Typography variant="h5">{postData.title}</Typography>
				<Typography variant="body2">{postData.body}</Typography>
				<Link href={`/posts/${postData.id}/comments`}>
					Comentarios del post
				</Link>
			</Grid>
		</Grid>
	);
};

export default HomePostDetails;
