import React from 'react';
import PropTypes from 'prop-types';
import './BookmarkForm.css';

class BookmarkForm extends React.Component {
	constructor() {
		super();
		this.input = React.createRef();
	}
	render() {
		return (
			<div className="bookmark-form-container">
				<form className="bookmark-form" onSubmit={this.handleSubmit}>
					<input
						placeholder="Add website address"
						ref={this.input}
						required
					/>
					<input type="submit" value="submit" />
				</form>
				<div id="error-message" />
			</div>
		);
	}
	handleSubmit = (event) => {
		let input = this.input.current.value;

		event.preventDefault();
		if (this.emailValidation(input)) {
			this.props.onAdd(input);
			input = '';
			document.getElementById('error-message').innerText = '';
		} else {
			document.getElementById('error-message').innerText =
				'Not a valid website url';
		}
	};
	emailValidation = (input) => {
		let websiteRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
		return websiteRegex.test(input);
	};
}
BookmarkForm.propTypes = {
	onAdd: PropTypes.func
};

export default BookmarkForm;
