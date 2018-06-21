import React from 'react';
import PropTypes from 'prop-types';
import './WebsiteChoice.css';

class WebsiteChoice extends React.Component {
	constructor() {
		super();
		this.editedInput = React.createRef();
	}
	render() {
		return (
			<li>
				<div className="website-choice-container">
					<span className="website-choice">{this.props.website}</span>
					<span className="delete-btn" onClick={this.handleDelete}>
						x
					</span>
					<span className="edit-btn" onClick={this.handleEdit}>
						Edit
					</span>
					<form className="editing-form" onSubmit={this.handleEditSubmit}>
						<input
							placeholder="Edit Website Address"
							ref={this.editedInput}
							autoFocus
							required
						/>
						<input type="submit" value="submit" />
					</form>
				</div>
			</li>
		);
	}
	handleDelete = () => {
		this.props.onDelete(this.props.website);
	};
	handleEditSubmit = (event) => {
		event.preventDefault()
		if (this.urlValidation(this.editedInput.current.value)) {
			this.props.onEdit(this.props.website, this.editedInput.current.value);
			document.getElementById('error-message').innerText = '';
		} else {
			document.getElementById('error-message').innerText =
			'Not a valid website url';
		}
	}
	handleEdit = () => {
		// hiding and unhiding the form panel
	};
	urlValidation = (input) => {
		let websiteRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
		return websiteRegex.test(input);
	};
}

WebsiteChoice.propTypes = {
	website: PropTypes.string,
	onDelete: PropTypes.func
};

export default WebsiteChoice;
