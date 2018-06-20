import React from 'react';

class BookmarkForm extends React.Component {
	render() {
		return (
			<div className="bookmark-form">
				<form>
					<input placeholder="Add website address" />
					<input type="submit" value="submit" />
				</form>
			</div>
		);
	}
}

export default BookmarkForm;
