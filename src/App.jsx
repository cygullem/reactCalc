import React, { useState } from 'react';

function Calculator() {
	const [currentInput, setCurrentInput] = useState('');
	const [display, setDisplay] = useState('0');
	const [lastOperator, setLastOperator] = useState('');

	const messages = {
		'+': 'I miss Youuu 🥺',
		'-': 'Cuddle? 👉🥺',
		'*': 'Send pic pls 🥺🍑',
		'/': 'I Lovvee Youuu 🥺'
	};

	const handleClick = (value) => {
		if (value === 'C') {
			setCurrentInput('');
			setDisplay('0');
			setLastOperator('');  
		} else if (value === '=') {
			if (lastOperator in messages) {
				setDisplay(messages[lastOperator]);
			} else {
				setDisplay(currentInput || '0'); 
			}
		} else if (['+', '-', '*', '/'].includes(value)) {
			setLastOperator(value);
			setCurrentInput(currentInput + value);
			setDisplay(currentInput + value);
		} else {
			const newInput = currentInput + value;
			setCurrentInput(newInput);
			setDisplay(newInput);
		}
	};

	return (
		<>
			<div className="calculator rounded-lg p-[20px] w-[400px]">
				<div className="display w-full h-[50px] bg-slate-700 text-white text-[1.5rem] text-right p-[10px] rounded-[5px] mb-[20px]" id="display">
					{display}
				</div>
				<div className="buttons grid grid-cols-4 gap-[10px]">
					{['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'C', '+'].map((buttonValue) => (
						<div
							key={buttonValue}
							className="button select-none bg-slate-400 text-white rounded-[5px] p-[15px] text-center text-[1.2rem] cursor-pointer active:bg-slate-300"
							onClick={() => handleClick(buttonValue)}
						>
							{buttonValue}
						</div>
					))}
					<div
						className="button select-none bg-slate-400 text-white rounded-[5px] p-[15px] text-center text-[1.2rem] cursor-pointer active:bg-slate-300"
						style={{ gridColumn: 'span 4' }}
						onClick={() => handleClick('=')}
					>
						=
					</div>
				</div>
			</div>
		</>
	)
}

export default Calculator
