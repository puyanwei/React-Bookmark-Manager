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
		websites = websites.map((website, i) => {
			// prettier-ignore
			return (
				<WebsiteChoice website={website} key={i} onDelete={this.onDelete} />
			);
		});

		return (
			<div className="App">
				<h1>Bookmarks</h1>
				<BookmarkForm onAdd={this.onAdd} />
				<ul>{websites}</ul>
			</div>
		);
	}
	onAdd = (newWebsite) => {
		let updatedWebsiteList = this.state.websites;
		updatedWebsiteList.push(newWebsite);
		this.setState({
			characters: updatedWebsiteList
		});
	};
	onDelete = (currentWebsite) => {
		let updatedWebsiteList = this.state.websites.filter((website) => {
			return currentWebsite !== website;
		});
		this.setState({
			websites: updatedWebsiteList
		});
	};
}

export default App;
