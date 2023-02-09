import React, { useState } from 'react';

const DropDown = (props) => {
	const { options, value, readOnly } = props;
	const [optionsVisible, setOptionsVisible] = useState(false);
	const [storedValues, setStoredValues] = useState(value ? value : []);

	const toggleOptions = () => setOptionsVisible((prevState) => !prevState);
	const storeValue = (e, selectedItem) => {
		const currentValues = storedValues;
		if (e.target.checked) {
			setStoredValues([selectedItem, ...currentValues]);
		} else {
			const index = currentValues.findIndex(
				(x) => x.value === selectedItem.value,
			);
			if (index > -1) {
				currentValues.splice(index, 1);
			}
			setStoredValues([...currentValues]);
		}
	};
	const renderTags = () => {
		return storedValues
			.slice(0)
			.reverse()
			.map((item, index) => (
				<span className='tag-wrapper' key={index}>
					{item.label}
				</span>
			));
	};

	return (
		<>
			<div onClick={toggleOptions}>
				<div className='drop-down'>
					<div>
						{storedValues.length
							? renderTags()
							: 'Select countries '}
						<img
							alt='dp'
							src='/dropdown.png'
							className='drop-icon'
						/>
					</div>
				</div>
			</div>
			{optionsVisible ? (
				<div className='checkboxes'>
					{options.map((item, index) => (
						<label key={index} for={item.value}>
							<input
								disabled={readOnly}
								checked={storedValues.find(
									(o) => o.value === item.value,
								)}
								onChange={(e) => storeValue(e, item)}
								type='checkbox'
								id={item.value}
							/>
							{item.label}
						</label>
					))}
				</div>
			) : null}
		</>
	);
};

export default DropDown;
