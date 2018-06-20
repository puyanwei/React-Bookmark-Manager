import React, { Component } from 'react';
import './App.css';
import BookmarkForm from './components/BookmarkForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			websites: []
		};
	}
	render() {
		return (
			<div className="App">
				<h1>Bookmarks</h1>
				<BookmarkForm onAdd={ this.onAdd }></BookmarkForm>
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
