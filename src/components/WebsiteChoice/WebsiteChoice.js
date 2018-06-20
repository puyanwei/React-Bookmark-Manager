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
					<span className="edit-btn" onClick={this.editWebsite}>
						Edit
					</span>
				</div>
			</li>
		);
	}
	handleDelete = () => {
		this.props.onDelete(this.props.website);
	};
	editWebsite = (event) => {
		document.querySelector('.website-choice').contentEditable = true;
		document.querySelector('.website-choice').focus();
		document.getElementsByClassName('edit-btn')[0].innerText = 'Save';
		console.log(event.currentTarget);
	};
	// DOM version of Jquery's index()
	index = (element) => {
		return document.querySelectorAll(element).length;
	};
}

WebsiteChoice.propTypes = {
	website: PropTypes.string,
	onDelete: PropTypes.func
};

export default WebsiteChoice;
