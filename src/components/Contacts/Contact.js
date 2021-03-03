import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
	state = {
		showContactsInfo: false,
	};

	handleToggle = (e) => {
		this.setState({
			showContactsInfo: !this.state.showContactsInfo,
		});
	};
	deleteContact = async (id, dispatch) => {
		await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
		dispatch({ type: "DELETE_CONTACT", payload: id });
	};

	render() {
		const { id, name, email, phone } = this.props.contact;
		const { showContactsInfo } = this.state;

		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;

					return (
						<div className="card card-body mb-3">
							<h4>
								{name}{" "}
								<i
									className="fas fa-sort-down"
									style={{ cursor: "pointer" }}
									onClick={this.handleToggle}
								></i>
								<i
									className="fas fa-times"
									style={{ color: "red", float: "right", cursor: "pointer" }}
									onClick={this.deleteContact.bind(this, id, dispatch)}
								></i>
								<Link to={`contact/edit/${id}`}>
									<i
										className="fas fa-pencil-alt"
										style={{
											cursor: "pointer",
											float: "right",
											color: "slateBlue",
											marginRight: "1rem",
										}}
									></i>
								</Link>
							</h4>

							{showContactsInfo ? (
								<ul className="list-group">
									<li className="list-group-item">Email: {email}</li>
									<li className="list-group-item">Phone no: {phone}</li>
								</ul>
							) : null}
						</div>
					);
				}}
			</Consumer>
		);
	}
}

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default Contact;
