import React, { Component } from 'react';
import './App.css';
import BookmarkForm from './components/BookmarkForm';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Bookmarks</h1>
				<BookmarkForm></BookmarkForm>
			</div>
		);
	}
}

export default App;
