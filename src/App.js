import React, { Component } from 'react';
import './App.css';
import BookmarkForm from './components/BookmarkForm/BookmarkForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			websites: ['test1', 'test2', 'test3']
		};
	}
	render() {
		let websites = this.state.websites.map((website, index) => {
			return <li>{ website }</li>;});

		return (
			<div className="App">
				<h1>Bookmarks</h1>
				<BookmarkForm onAdd={ this.onAdd }></BookmarkForm>
				<ul>{ websites }</ul>
			</div>
		);
	}
	onAdd = (newWebsite) => {
		let updatedWebsiteList = this.state.websites;
		updatedWebsiteList.push(newWebsite);
		this.setState({
			characters: updatedWebsiteList
		});
		console.log(updatedWebsiteList);
	};
}

export default App;
