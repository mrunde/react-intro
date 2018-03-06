import * as React from "react";
import InputComponent from "./InputComponent";
import {Button, ButtonGroup} from "react-bootstrap";
import OutputComponent from "./OutputComponent";
import ModalComponent from "./ModalComponent";

interface AppState
{
	firstName: string;
	lastName: string;
	color: string;
	showModal: boolean;
}

class App extends React.Component<any, AppState>
{
	constructor(props: any)
	{
		super(props);

		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.getFullName = this.getFullName.bind(this);
		this.changeColorOfName = this.changeColorOfName.bind(this);
		this.showModalWithFullName = this.showModalWithFullName.bind(this);
		this.closeModalWithFullName = this.closeModalWithFullName.bind(this);
		this.clearNames = this.clearNames.bind(this);

		this.state = {
			firstName: "John",
			lastName: "Doe",
			color: "red",
			showModal: false
		};
	}

	private onChangeFirstName(e: any): void
	{
		this.setState({
			firstName: e.target.value
		});
	}

	private onChangeLastName(e: any): void
	{
		this.setState({
			lastName: e.target.value
		});
	}

	private getFullName(): string
	{
		return this.state.firstName + " " + this.state.lastName;
	}

	private changeColorOfName(): void
	{
		if (this.state.color !== "red")
		{
			this.setState({
				color: "red"
			});
		}
		else
		{
			this.setState({
				color: "blue"
			});
		}
	}

	private showModalWithFullName(): void
	{
		this.setState({
			showModal: true
		});
	}

	private closeModalWithFullName(): void
	{
		this.setState({
			showModal: false
		});
	}

	private clearNames(): void
	{
		this.setState({
			firstName: "",
			lastName: ""
		});
	}

	public render(): JSX.Element
	{
		const {firstName, lastName, color, showModal} = this.state;

		return (
			<>
				<InputComponent onChange={this.onChangeFirstName}
				                label={"First Name"}
				                value={firstName}
				/>
				<InputComponent onChange={this.onChangeLastName}
				                label={"Last Name"}
				                value={lastName}
				/>

				<br/>

				<OutputComponent value={this.getFullName()} color={color}/>

				<br/>

				<ButtonGroup>
					<Button onClick={this.changeColorOfName}>Change color of name</Button>
					<Button onClick={this.showModalWithFullName}>Show modal with full name</Button>
				</ButtonGroup>

				{showModal && (
					<ModalComponent title={"Show modal with full name"}
					                content={this.getFullName()}
					                closeModal={this.closeModalWithFullName}
					                clearNames={this.clearNames}
					/>
				)}
			</>
		);
	}
}

export default App;
