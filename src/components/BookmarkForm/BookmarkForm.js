import React from 'react';
import style from './BookmarkForm.css';

class BookmarkForm extends React.Component {
	render() {
		return (
			<div className="bookmark-form-container">
				<form className="bookmark-form" onSubmit={this.handleSubmit}>
					<input
						placeholder="Add website address"
						ref="webAddress"
						required
					/>
					<input type="submit" value="submit" />
				</form>
				<div id="error-message" />
			</div>
		);
	}
	handleSubmit = (event) => {
		event.preventDefault();
		if (this.emailValidation()) {
			this.props.onAdd(this.refs.webAddress.value);
			this.refs.webAddress.value = '';
			document.getElementById('error-message').innerText = '';
		} else {
			document.getElementById('error-message').innerText =
				'Not a valid website url';
		}
	};
	emailValidation() {
		let websiteRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
		return websiteRegex.test(this.refs.webAddress.value);
	}
}

export default BookmarkForm;
