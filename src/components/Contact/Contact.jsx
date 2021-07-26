import React from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import {useState} from "react";
// import {resourceLimits} from "node:worker_threads";

// const Result = () => {
// 	<p>Your message has been successfully sent. I will get back to you soon.</p>;
// };

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [result, setResult] = useState(false);

	const handleChange = (e) => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;

			case "email":
				setEmail(e.target.value);
				break;
			case "message":
				setMessage(e.target.value);
				break;

			default:
				break;
		}
	};

	const sendForm = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_l3g16bn",
				"template_z3btm4r",
				e.target,
				"user_kCgDbTAVSj4YZForlxnbu"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setName("");
		setEmail("");
		setMessage("");
		setResult(true);
	};

	return (
		<div className="contact" id="contact">
			<h1> Contact </h1>

			<form className="form" onSubmit={sendForm} action="">
				<label className="name" htmlFor="">
					Name:
				</label>
				<input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={handleChange}
				/>
				<br />
				<label className="email" htmlFor="">
					Email:
				</label>
				<input
					type="text"
					name="email"
					placeholder="Email"
					value={email}
					onChange={handleChange}
				/>
				<br />
				<label className="message" htmlFor="">
					Message:
				</label>
				<textarea
					name="message"
					id=""
					cols="30"
					rows="10"
					placeholder="Message"
					value={message}
					onChange={handleChange}
				/>
				<br />
				<input className="sendbutton" type="submit" value="Send Message" />
			</form>
			<div className="result">
				{result ? (
					<p>
						Your message has been successfully sent. I will get back to you
						soon.
					</p>
				) : null}{" "}
			</div>
		</div>
	);
};

export default Contact;
