import React from "react";

//create your first component
export default class Home extends React.Component {
	constructor() {
		super();
		this.state = { activeLight: null };
	}

	render() {
		console.log(this.state);
		let RedLightOn = "";
		if (this.state.activeLight == "red") {
			RedLightOn = "red";
		}
		let YellowLightOn = "";
		if (this.state.activeLight == "yellow") {
			YellowLightOn = "yellow";
		}
		let GreenLightOn = "";
		if (this.state.activeLight == "green") {
			GreenLightOn = "green";
		}

		return (
			<div className="">
				<div className="trafficPole mx-auto" />
				<div className="rounded mx-auto py-2 trafficLight">
					<div
						className={
							"bg-danger rounded-circle mx-auto my-1 light " +
							RedLightOn
						}
						onClick={() => this.setState({ activeLight: "red" })}
					/>
					<div
						className={
							"bg-warning rounded-circle mx-auto my-1 light " +
							YellowLightOn
						}
						onClick={() => this.setState({ activeLight: "yellow" })}
					/>
					<div
						className={
							"bg-success rounded-circle mx-auto my-1 light " +
							GreenLightOn
						}
						onClick={() => this.setState({ activeLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
