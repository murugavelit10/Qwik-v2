import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Components/Header'
import Section from './Components/Section'
import Footer from './Components/Footer'
import { simpleAction } from './Actions/index'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Section {...this.state} />
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	...state
})

const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
