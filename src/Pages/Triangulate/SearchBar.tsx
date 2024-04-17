import React from "react";

const SearchBar = () => {
	return (
		<React.Fragment>
			<div className="d-flex align-items-center gap-1 search-bar-container">
				<select
					name="fence-name"
					className="form-control select-fence-in-triangulate">
					<option value="">Select a Fence Name</option>
				</select>
				<button className="primary-button">Triangulate</button>
			</div>
		</React.Fragment>
	);
};

export default SearchBar;
