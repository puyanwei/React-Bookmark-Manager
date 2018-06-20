import React from 'react';

class WebsiteChoice extends React.Component {
	render() {
		return (
			<li>
				<div className="website-choice-container">
					<span className="website-choice">{this.props.website}</span>
					<span>x</span>
					<span>Edit</span>
				</div>
			</li>
		);
	}
}

export default WebsiteChoice;
