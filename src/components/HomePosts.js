import React, { useState, useEffect } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import useRootContext from '../hooks/useRootContext';

const HomePosts = () => {
	const [postData, setPostData] = useState([]);
	const { posts } = useRootContext();
	const { state, actions } = posts;

	useEffect(() => {
		actions.fetchPosts();
		// eslint-disable-next-line  react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setPostData(state.posts);
	}, [state.posts]);

	return (
		<Grid container>
			{postData.map(post => {
				const { title, id, body } = post;
				return (
					<Grid key={id} item xs={12} style={{ marginBottom: 20 }}>
						<Typography variant="h5">{title}</Typography>
						<Typography variant="body2">{body}</Typography>
						<Link href={`/posts/${id}`}>Detalle del post</Link>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default HomePosts;
