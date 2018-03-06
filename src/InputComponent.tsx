import * as React from "react";
import {ControlLabel, FormControl} from "react-bootstrap";

interface InputComponentProps
{
	onChange: (e: any) => void;
	label: string;
	value: string;
}

class InputComponent extends React.Component<InputComponentProps, any>
{
	constructor(props: InputComponentProps)
	{
		super(props);
	}

	public render(): JSX.Element
	{
		const {onChange, label, value} = this.props;

		return (
			<div>
				<ControlLabel>{label}</ControlLabel>
				<br/>
				<FormControl type="text"
				             value={value}
				             onChange={onChange}
				/>
			</div>
		);
	}
}

export default InputComponent;
