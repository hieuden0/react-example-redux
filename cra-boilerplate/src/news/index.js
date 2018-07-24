import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NewsList from './containers/NewsList';
import './style.css';

class News extends Component {
	render() {
		return (
			<div id="news">
				<Container>
					<h2 className="text-center">News</h2>
					<NewsList />
				</Container>
			</div>
		);
	}
}

export default News;
