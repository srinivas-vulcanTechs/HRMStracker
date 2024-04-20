import React from "react";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const SelectFenceWIthDate = () => {
	const [value, onChange] = React.useState<Value>(new Date());
	const [time, setTime] = React.useState("10:00");

	const handleTimeChange = (newTime: string | null) => {
		if (newTime !== null) {
			setTime(newTime);
		}
	};
	return (
		<React.Fragment>
			<div className="select-bar-container">
				<select name="fence-name" className="form-control" id="">
					<option value="">select a Fence Name</option>
				</select>
				<div className="bg-white">
					<DatePicker value={value} onChange={onChange} />
				</div>
				<div className="bg-white">
					<TimePicker value={time} onChange={handleTimeChange} />
				</div>
				<button className="primary-button w-100">Location History</button>
			</div>
		</React.Fragment>
	);
};

export default SelectFenceWIthDate;
