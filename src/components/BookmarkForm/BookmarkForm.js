import React from 'react';
import PropTypes from 'prop-types';
import './BookmarkForm.css';
import { urlValidation } from '../../utils/emailValidation';

class BookmarkForm extends React.Component {
    constructor() {
        super();
        this.state = {
            websiteAddress: '',
            errorMessage: false
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        let userInput = this.state.websiteAddress;
        if (urlValidation(userInput)) {
            this.props.addWebsite(userInput);
            this.setState({
                websiteAddress: '',
                errorMessage: false
            });
        } else {
            this.setState({ errorMessage: true });
        }
    };
    updateInputState = event => {
        this.setState({ websiteAddress: event.target.value });
    };
    render() {
        return (
            <div className="bookmark-form-container">
                <form onSubmit={this.handleSubmit} className="bookmark-form">
                    <input
                        type="text"
                        value={this.state.websiteAddress}
                        onChange={this.updateInputState}
                        placeholder="Add website address"
                        autoFocus
                        required
                    />
                    <input type="submit" value="Submit" />
                </form>
                {this.state.errorMessage && (
                    <div id="error-message">Not a valid website url</div>
                )}
            </div>
        );
    }
}
BookmarkForm.propTypes = {
    addWebsite: PropTypes.func
};

export default BookmarkForm;
