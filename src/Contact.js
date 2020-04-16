import React from 'react';
import './Contact.css';
import axios from 'axios';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
		};
	}
	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onMessageChange = (event) => {
		this.setState({ message: event.target.value });
	};
	onSubjectChange = (event) => {
		this.setState({ subject: event.target.value });
	};
	resetForm = () => {
		this.setState({ name: '', email: '', message: '' });
	};
	handleSubmit = (e) => {
		e.preventDefault();

		axios({
			method: 'POST',
			url: 'http://127.0.0.1:3002/send',
			data: this.state,
		}).then((response) => {
			if (response.data.status === 'success') {
				alert('Message Sent.');
				this.resetForm();
			} else if (response.data.status === 'fail') {
				alert('Message failed to send.');
			}
		});
	};
	render() {
		return (
			<div className="content content-contact">
				<div className="contact-me">
					<h3>get in touch</h3>
				</div>
				<div className="form-div">
					<form
						className="form-contact"
						action="action_page.php"
						onSubmit={this.handleSubmit}
						method="POST"
					>
						<label htmlFor="name" className="visually-hidden">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="name"
							value={this.state.name}
							onChange={this.onNameChange}
						/>
						<label
							htmlFor="exampleInputEmail1"
							className="visually-hidden"
						>
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email"
							aria-describedby="emailHelp"
							value={this.state.email}
							onChange={this.onEmailChange}
						/>
						<label htmlFor="subject" className="visually-hidden">
							Subject:
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							placeholder="subject"
							value={this.state.subject}
							onChange={this.onSubjectChange}
						/>
						<label htmlFor="message" className="visually-hidden">
							Write your Message:
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="message"
							rows="5"
							value={this.state.message}
							onChange={this.onMessageChange}
						></textarea>
						<label htmlFor="submit" className="visually-hidden">
							Send your Message:
						</label>
						<input type="submit" value="send" id="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
