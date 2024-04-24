import React from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ModalProps = {
	show: boolean;
	setShowModal: (parameter: boolean) => void;
	date: string;
	time: string;
	setDate: any;
	setTime: any;
	submitPinPointForm: (e: any) => void;
};
const PinPointModal = (props: ModalProps) => {
	const {
		show,
		setShowModal,
		date,
		setDate,
		time,
		setTime,
		submitPinPointForm,
	} = props;
	return (
		<Modal
			show={show}
			onHide={() => setShowModal(false)}
			backdrop="static"
			size="sm"
			centered>
			<form className="form-section p-4" onSubmit={submitPinPointForm}>
				<Modal.Header closeButton>
					<h4 className="fw-bold fs-4">Pin Point</h4>
				</Modal.Header>
				<div className="form-group mb-2 d-flex flex-column">
					<label htmlFor="date" className="fw-bold fs-6">
						Date
					</label>
					<DatePicker value={date} onChange={setDate} />
				</div>
				<div className="form-group mb-2 d-flex flex-column">
					<label htmlFor="time" className="fw-bold fs-6">
						Time
					</label>
					<TimePicker value={time} onChange={setTime} />
				</div>
				<button className="primary-button w-100" type="submit">
					Submit
				</button>
			</form>
		</Modal>
	);
};

export default PinPointModal;
