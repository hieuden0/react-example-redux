import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import {
	doAction
} from '../actions/doActions';
import { bindActionCreators } from 'redux'

class ProductList extends Component {

	componentDidMount() {
		let username = 'mohandere';
		this.props.doAction(username);
	}

	render() {
		let pageContent = ''

		if (1 !== 1) {
      pageContent = (
        <div className="userReposLoader">
          Loading...
        </div>
      )
		} else {
			pageContent = (
				<div className="row isotope-grid">
					<Product/>	
					<Product/>
					<Product/>
					<Product/>
					<Product/>	
					<Product/>
					<Product/>
					<Product/>
				</div>	
			
			)
		}

		let settingList = '';
		let { repos } = this.props;
		
		if (this.props.loading) {
			settingList = (
			  <div className="userReposLoader">
				Loading...
			  </div>
			)
			  } else {
				settingList = (
					  <ul className="repos">
						  {repos.map((repo, i) => <p key={"p" + i}>{repo.SettingValue}</p>)}
					  </ul>
				  )
			  }


		return (
			<div className="bg0 m-t-23 p-b-140">
				<div className="container">
					<div className="flex-w flex-sb-m p-b-52">	
						<Filter/>					
						{pageContent}
						{settingList}
						<Modal/>
					</div>					
				</div>
			</div>
		);

	}
}

const mapStateToProps = state => {
	return {
		repos: state.products.action.repos,
		loading: state.products.action.isLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		doAction
	}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
// export default connect(null, null)(ProductList);
