import React, { Component } from 'react'

export default class Footer extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			currentYear: (new Date()).getFullYear()
		}
	}
	
	render() {
		return (
			<footer>
				<p class="copyright">&copy; {this.state.currentYear} Qwik</p>
			</footer>
		)
	}
}
