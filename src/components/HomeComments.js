import React, { useEffect, useState } from 'react';
import useRootContext from '../hooks/useRootContext';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

const HomeComments = () => {
	const { postId } = useParams();
	const { comments } = useRootContext();
	const { state, actions } = comments;

	const [commentsData, setCommentsData] = useState([]);

	useEffect(() => {
		actions.fetchComments(postId);
		// eslint-disable-next-line
	}, [postId]);

	useEffect(() => {
		setCommentsData(state.comments);
	}, [postId, state.comments]);

	return (
		<Grid container>
			{commentsData.map(comment => {
				const { id, name, email, body } = comment;
				return (
					<Grid item xs={12} key={id} style={{ marginBottom: 50 }}>
						<Typography variant="h5">{name}</Typography>
						<Typography variant="caption">{email}</Typography>
						<Typography variant="body1">{body}</Typography>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default HomeComments;
