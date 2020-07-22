import React from "react";

//create your first component
export default class Home extends React.Component {
	constructor() {
		super();
		this.state = { activeLight: null };
	}
	render() {
		console.log(this.state);
		return (
			<div className="">
				<div className="trafficPole mx-auto" />
				<div className="rounded mx-auto py-2 trafficLight">
					<div
						className={
							"bg-success rounded-circle mx-auto my-1 light " +
							this.state
						}
						onClick={() => this.setState({ activeLight: "green" })}
					/>
					<div
						className={
							"bg-warning rounded-circle mx-auto my-1 light " +
							this.state
						}
						onClick={() => this.setState({ activeLight: "yellow" })}
					/>
					<div
						className={
							"bg-danger rounded-circle mx-auto my-1 light " +
							this.state
						}
						onClick={() => this.setState({ activeLight: "red" })}
					/>
				</div>
			</div>
		);
	}
}
