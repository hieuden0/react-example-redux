import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ProductList from './containers/ProductList';
import './style.css';
import './abc.css';

class News extends Component {
	render() {
		return (
			<div id="news">
				<Container>
					<h2 className="text-center">Product</h2>
                    <ProductList />
				</Container>
			</div>
		);
	}
}

export default News;
