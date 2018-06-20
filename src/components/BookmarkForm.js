import React from 'react';

class BookmarkForm extends React.Component {
	render() {
		return (
			<div className="bookmark-form-container">
				<form className="bookmark-form" onSubmit={this.handleSubmit}>
					<input placeholder="Add website address" ref="webAddress"
						required
					/>
					<input type="submit" value="submit" />
				</form>
			</div>
		);
	}
    handleSubmit = (event) => {
    	event.preventDefault();
    	this.props.onAdd(this.refs.webAddress.value);
    	this.refs.webAddress.value = '';
    }
}


export default BookmarkForm;
