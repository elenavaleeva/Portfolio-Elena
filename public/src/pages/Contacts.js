import { useState } from "react";

const Contacts = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	fetch().then((response) => {
		return response.json()
	}).then((data) => {
		console.log(data)
	})

	const [errorName, setErrorName] = useState('');
	const [errorEmail, setErrorEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const updateName = (e) => {
		setName(e.target.value);
		if (name.trim() === '') {
			console.error('Enter Name!');
			setErrorName('Hey!!! Enter Name!!!!');
		} else {
			setErrorName('');
		}
	};

    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<h1>Name: {name}</h1>
				<h1>Email: {email}</h1>
				<h1>Message: {message}</h1>
				<h1>Error Name: {errorName}</h1>
				<h1>Error Email: {errorEmail}</h1>
				<h1>Error Message: {errorMessage}</h1>

				<form action="" className="form">
					<label htmlFor="name" className="label">
						<p className="label__title">Name</p>
						<input
							className="input"
							type="text"
							placeholder="Name"
							id="name"
							autoComplete="off"
							value={name}
							onChange={updateName}
							onBlur={updateName}
						/>
					</label>

					<label htmlFor="email">
						<p className="label__title">Email</p>
						<input
							className="input"
							type="email"
							placeholder="Email"
							autoComplete="off"
							id="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								if (email.trim() === '') {
									console.error('Enter Email!');
									setErrorEmail('Enter Email!!!!');
								} else {
									setErrorEmail('');
								}
							}}
							onBlur={(e) => {
								console.log('Email Blur');
								if (email.trim() === '') {
									console.error('Enter Email!');
									setErrorEmail('Enter Email!!!!');
								} else if (!validateEmail(e.target.value)) {
									setErrorEmail('Enter Correct Email!!!!');
								} else {
									setErrorEmail('');
								}
							}}
						/>
					</label>

					<label htmlFor="message">
						<p className="label__title">Message</p>
						<textarea
							className="texarea"
							name=""
							id=""
							cols="30"
							rows="10"
							autoComplete="off"
							id="message"
							placeholder="Enter your message"
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
								if (message.trim() === '') {
									console.error('Enter Message!');
									setErrorMessage('Enter Message!!!!');
								} else {
									setErrorMessage('');
								}
							}}
							onBlur={() => {
								console.log('Message Blur');
								if (message.trim() === '') {
									console.error('Enter Message!');
									setErrorMessage('Enter Message!!!!');
								} else {
									setErrorMessage('');
								}
							}}
						></textarea>
					</label>

					{errorName && <div className="error">{errorName}</div>}
					{errorEmail && <div className="error">{errorEmail}</div>}
					{errorMessage && (
						<div className="error">{errorMessage}</div>
					)}

					<button type="submit" className="submitBtn">
						Submit
					</button>
				</form>
			</div>
		</main>
	);
}

export default Contacts;