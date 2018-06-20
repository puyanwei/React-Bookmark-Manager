import React from 'react';
import style from './WebsiteChoice.css';

class WebsiteChoice extends React.Component {
	render() {
		return (
			<li>
				<div className="website-choice-container">
					<span className="website-choice">{this.props.website}</span>
					<span className="delete-btn">x</span>
					<span className="edit-btn">Edit</span>
				</div>
			</li>
		);
	}
}

export default WebsiteChoice;
