import React, { Component } from 'react';
import './App.css';
import BookmarkForm from './components/BookmarkForm/BookmarkForm';
import WebsiteChoice from './components/WebsiteChoice/WebsiteChoice';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			websites: []
		};
	}
	render() {
		let websites = this.state.websites;
		websites = websites.map((website, index) => {
			// prettier-ignore
			return (
				<WebsiteChoice
					website={website}
					key={index}
					onDelete={this.onDelete}
					onEdit={this.onEdit}
				>
					{website}
				</WebsiteChoice>
			);
		});
		return (
			<div className="App">
				<h1>Bookmark Manager</h1>
				<BookmarkForm onAdd={this.onAdd} />
				<ul>{websites}</ul>
			</div>
		);
	}
	componentWillMount = () => {
		this.loadSessions();
	};
	loadSessions = () => {
		const cachedWebsites = localStorage.getItem('websites');
		if (cachedWebsites !== null) {
			const array = cachedWebsites.split(',');
			this.setState({
				websites: array
			});
		}
	};

	sendSessions = (value) => {
		value.length === 0
			? localStorage.clear()
			: localStorage.setItem('websites', value);
	};

	onAdd = (newWebsite) => {
		let newWebsiteList = this.state.websites;
		newWebsiteList.push(newWebsite);
		this.updateWebsiteList(newWebsiteList);
	};
	onDelete = (currentWebsite) => {
		let newWebsiteList = this.state.websites.filter((website) => {
			return currentWebsite !== website;
		});
		this.updateWebsiteList(newWebsiteList);
	};
	onEdit = (currentWebsite, editedWebsite) => {
		let newWebsiteList = this.state.websites.map((website) => {
			let choice = currentWebsite === website ? editedWebsite : website;
			return choice;
		});
		this.updateWebsiteList(newWebsiteList);
	};
	updateWebsiteList = (value) => {
		this.setState({
			websites: value
		});
		this.sendSessions(value);
	};
}

export default App;
