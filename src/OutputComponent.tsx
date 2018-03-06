import * as React from "react";
import {Panel} from "react-bootstrap";

interface OutputComponentProps
{
	value: string;
	color: string;
}

class OutputComponent extends React.Component<OutputComponentProps, any>
{
	constructor(props: OutputComponentProps)
	{
		super(props);
	}

	public render(): JSX.Element
	{
		const {value, color} = this.props;

		return (
			<Panel>
				<h2 style={{color: color}}>
					{value}
				</h2>
			</Panel>
		);
	}
}

export default OutputComponent;
