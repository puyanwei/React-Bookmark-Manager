import React from 'react';
import PropTypes from 'prop-types';
import './WebsiteChoice.css';
import { urlValidation } from '../../utils/emailValidation';

class WebsiteChoice extends React.Component {
    constructor() {
        super();
        this.editedInput = React.createRef();
        this.state = {
            show: 'none',
            displayError: false
        };
    }
    handleDelete = () => {
        this.props.deleteWebsite(this.props.id);
    };
    handleEditSubmit = event => {
        event.preventDefault();
        if (urlValidation(this.editedInput.current.value)) {
            this.props.editWebsite(
                this.props.website,
                this.editedInput.current.value
            );
            this.editedInput.current.value = '';
            this.setState({ displayError: false });
            this.toggleEditForm();
        } else {
            this.setState({ displayError: true });
        }
    };
    toggleEditForm = () => {
        this.state.show === 'none'
            ? this.setState({ show: null })
            : this.setState({ show: 'none' });
    };
    render() {
        return (
            <li>
                <div className="website-choice-container">
                    <span className="website-choice">
                        <a href={`http://${this.props.website}`}>
                            {this.props.website}
                        </a>
                    </span>
                    <span className="delete-btn" onClick={this.handleDelete}>
                        x
                    </span>
                    <span className="edit-btn" onClick={this.toggleEditForm}>
                        Edit
                    </span>
                    <form
                        className="editing-form"
                        style={{ display: this.state.show }}
                        onSubmit={this.handleEditSubmit}
                    >
                        <input
                            id="editing-textbox"
                            placeholder="Edit Website Address"
                            ref={this.editedInput}
                            required
                        />
                        <input type="submit" value="submit" />
                    </form>
                    <div className="editing-error-message">
                        {this.state.displayError
                            ? 'Not a valid website url'
                            : ''}
                    </div>
                </div>
            </li>
        );
    }
}

WebsiteChoice.propTypes = {
    website: PropTypes.string,
    deleteWebsite: PropTypes.func,
    editWebsite: PropTypes.func,
    id: PropTypes.number
};

export default WebsiteChoice;
