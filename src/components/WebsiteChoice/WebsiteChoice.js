import React from 'react';
import PropTypes from 'prop-types';
import './WebsiteChoice.css';

class WebsiteChoice extends React.Component {
	render() {
		return (
			<li>
				<div className="website-choice-container">
					<span className="website-choice">{this.props.website}</span>
					<span className="delete-btn" onClick={this.handleDelete}>
						x
					</span>
					<span className="edit-btn">Edit</span>
				</div>
			</li>
		);
	}
	handleDelete = () => {
		this.props.onDelete(this.props.website);
	};
}

WebsiteChoice.propTypes = {
	website: PropTypes.string,
	onDelete: PropTypes.func
};

export default WebsiteChoice;
