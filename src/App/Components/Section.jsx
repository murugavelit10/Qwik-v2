import React, { Component } from 'react'
import LabelList from './LabelList'

export default class Section extends Component {
	constructor(props) {
		super(props)
		this.state = props
		this.handleAddLabelBtnClick = this.handleAddLabelBtnClick.bind(this)
	}

	handleAddLabelBtnClick(evt) {

	}
	
	render() {
		return (
			<section>
				<div className="labels">
					<a className="addLabel fr" id="addLabel" href="#" title="Add Label">+</a>
					<div className="clearfix"></div>
					<LabelList />
				</div>
				<div className="addLabelForm"></div>
				<div className="labelDetails" style={{display:'none'}}>
					<a href="#" className="btn backBtn fl fa fw fa-long-arrow-left" title="Back"></a>
					<div className="labelDetailHeading fl m-left-10"></div>
					<a className="addLabelDetail fr" id="addLabelDetail" href="#" title="Add Label Detail">+</a>
					<div className="clearfix"></div>
					<ul className="labelDetailsList"></ul>
				</div>
				<div className="addLabelDetailForm"></div>
			</section>
		)
	}
}
