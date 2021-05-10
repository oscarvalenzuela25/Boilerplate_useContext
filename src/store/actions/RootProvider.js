import React, { createContext } from 'react';
import usePostsAction from './usePostsAction';
import useCommentsAction from './useCommentsAction';

export const RootContext = createContext();

export const RootProvider = props => {
	return (
		<RootContext.Provider
			value={{
				posts: usePostsAction(),
				comments: useCommentsAction(),
			}}
		>
			{props.children}
		</RootContext.Provider>
	);
};
