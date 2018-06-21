import React from 'react';
import PropTypes from 'prop-types';
import './WebsiteChoice.css';

class WebsiteChoice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listKey: 0
		};
	}
	componentDidMount() {
		this.currentClickedListIndex();
	}
	render() {
		return (
			<li>
				<div className="website-choice-container">
					<span className="website-choice">
						{this.props.website}
						{this.props.i}
					</span>
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
	editWebsite = () => {
		document.querySelector('.website-choice').contentEditable = true;
		document.querySelector('.website-choice').focus();
		document.getElementsByClassName('edit-btn')[0].innerText = 'Save';
	};

	// Handles the index number for edit button to know which list to edit
	currentClickedListIndex = () => {
		document.addEventListener('click', (event) => {
			let target = event.target,
				nodes,
				i;

			if (target.closest) {
				target = target.closest('li');
				if (target && target.tagName === 'LI') {
					nodes = target.parentElement.children;
					for (i = 0; nodes[i] !== target; ++i);
					this.setState({
						listKey: i
					});
				}
			}
		});
	};
}

WebsiteChoice.propTypes = {
	website: PropTypes.string,
	onDelete: PropTypes.func
};

export default WebsiteChoice;
