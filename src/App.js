import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePosts from './components/HomePosts';
import HomePostDetails from './components/HomePostDetails';
import HomeComments from './components/HomeComments';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/posts/:postId/comments">
					<HomeComments />
				</Route>
				<Route path="/posts/:postId">
					<HomePostDetails />
				</Route>
				<Route path="/posts">
					<HomePosts />
				</Route>
				<Route path="/">
					<HomePosts />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
