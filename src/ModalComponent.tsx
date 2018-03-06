import * as React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";

interface ModalComponentProps
{
	title: string;
	content: string;
	closeModal: () => void;
	clearNames: () => void;
}

class ModalComponent extends React.Component<ModalComponentProps, any>
{
	constructor(props: ModalComponentProps)
	{
		super(props);
	}

	public componentWillUnmount(): void
	{
		this.props.clearNames();
	}

	public render(): JSX.Element
	{
		const {title, content, closeModal} = this.props;

		return (
			<Modal show={true}
			       onHide={closeModal}
			>
				<ModalHeader closeButton>
					{title}
				</ModalHeader>
				<ModalBody>
					{content}
				</ModalBody>
				<ModalFooter>
					<Button onClick={closeModal}>Close modal and clear names</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default ModalComponent;
