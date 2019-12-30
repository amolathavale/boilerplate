import React from 'react';

class App extends React.Component {

	constructor(props) {
		console.log("In constru..")
		super(props);
		this.state = {
			users: [],
			isLoading: true,
			error: null
		}
		this.fetchData()
	}

	fetchData() {
		setTimeout(() => {
			console.log("Data being fetched...");
			fetch('/api/users')
				.then(response => response.json())
				.then(data => {
					console.log(data.users);
					this.setState({
						users: data.users,
						isLoading: false
					})
				})
				.catch(error => console.log(error))
		}, 2000);

	}

	render() {
		console.log('Called Render()')
		return (
			<div>
				<h1>Random User</h1>
				{this.state.error ? <p>{this.state.error.message}</p> : null}
				{!this.state.isLoading ? (
					this.state.users.map(user => 
						<div key={user.id}>
							<p>Name: {user.uname}</p>
							<p>Email Address: {user.email}</p>
							<hr />
						</div>
					)
				) : (<h3>Loading ...</h3>)

				}
			</div>
		);
	}
}

export default App;