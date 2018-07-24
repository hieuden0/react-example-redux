import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import News from '../components/News';
import PopularNews from '../components/PopularNews';
import _ from 'lodash';
// import Repo from '../components/Repo';
// import {
// 	doUserRepos
// } from '../actions/doUserRepos';
// import { bindActionCreators } from 'redux'

class NewsList extends Component {

	componentDidMount() {
		// let username = 'mohandere';
		// this.props.doUserRepos(username);
	}

	render() {
		// let { repos } = this.props;
		let pageContent = ''

		if (1 !== 1) {
      pageContent = (
        <div className="userReposLoader">
          Loading...
        </div>
      )
		} else {
			pageContent = (
				<div>				
					<News/>				
					<News/>
					<News/>
				</div>	
			
			)
		}

		return (
			<div>
				<div className="row mx-0">
					<div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
						{pageContent}
					</div>
					<PopularNews/>
				</div>
			</div>
		);

	}
}

// const mapStateToProps = state => {
// 	return {
// 		repos: state.home.userRepos.repos,
// 		loading: state.home.userRepos.isLoading
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({
// 		doUserRepos
// 	}, dispatch)
// };

//export default connect(mapStateToProps, mapDispatchToProps)(UserRepos);
export default connect(null, null)(NewsList);
