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
    componentDidMount = () => {
        this.loadLocalStorage();
    };
    loadLocalStorage = () => {
        const cachedWebsites = localStorage.getItem('websites');
        if (cachedWebsites !== null) {
            const array = cachedWebsites.split(',');
            this.setState({
                websites: array
            });
        }
    };

    sendLocalStorage = value => {
        value.length === 0
            ? localStorage.clear()
            : localStorage.setItem('websites', value);
    };

    addWebsite = newWebsite => {
        let newWebsiteList = this.state.websites;
        newWebsiteList.push(newWebsite);
        this.updateWebsiteList(newWebsiteList);
    };
    deleteWebsite = id => {
        let newWebsiteList = this.state.websites.filter((website, index) => {
            return index !== id;
        });
        this.updateWebsiteList(newWebsiteList);
    };
    editWebsite = (currentWebsite, editedWebsite) => {
        let newWebsiteList = this.state.websites.map(website => {
            let choice = currentWebsite === website ? editedWebsite : website;
            return choice;
        });
        this.updateWebsiteList(newWebsiteList);
    };
    updateWebsiteList = value => {
        this.setState({
            websites: value
        });
        this.sendLocalStorage(value);
    };
    render() {
        let { websites } = this.state;
        websites = websites.map((website, index) => {
            // prettier-ignore
            return (
				<WebsiteChoice
					website={website}
					key={index}
					id={index}
					deleteWebsite={this.deleteWebsite}
					editWebsite={this.editWebsite}
				>
					{website}
				</WebsiteChoice>
			);
        });
        return (
            <div className="App">
                <h1>Bookmark Manager</h1>
                <BookmarkForm addWebsite={this.addWebsite} />
                <ul>{websites}</ul>
            </div>
        );
    }
}

export default App;
