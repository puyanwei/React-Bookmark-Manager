import React from 'react';
import PropTypes from 'prop-types';
import './WebsiteChoice.css';

class WebsiteChoice extends React.Component {
	constructor() {
		super();
		this.editedInput = React.createRef();
		this.state = {
			show: 'none'
		};
	}
	render() {
		return (
			<li>
				<div className="website-choice-container">
					<span className="website-choice">
						<a href={`http://${this.props.website}`}>
							{this.props.website}
						</a>
					</span>
					<span className="delete-btn" onClick={this.handleDelete}>
						x
					</span>
					<span className="edit-btn" onClick={this.toggleEditForm}>
						Edit
					</span>
					<form
						className="editing-form"
						style={{ display: this.state.show }}
						onSubmit={this.handleEditSubmit}
					>
						<input
							id="editing-textbox"
							placeholder="Edit Website Address"
							ref={this.editedInput}
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
		event.preventDefault();
		if (this.urlValidation(this.editedInput.current.value)) {
			this.props.onEdit(
				this.props.website,
				this.editedInput.current.value
			);
			document.getElementById('error-message').innerText = '';
			this.toggleEditForm();
		} else {
			document.getElementById('error-message').innerText =
				'Not a valid website url';
		}
	};
	toggleEditForm = () => {
		this.state.show === 'none'
			? this.setState({ show: null })
			: this.setState({ show: 'none' });
	};
	urlValidation = (input) => {
		let websiteRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
		return websiteRegex.test(input);
	};
}

WebsiteChoice.propTypes = {
	website: PropTypes.string,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func
};

export default WebsiteChoice;
