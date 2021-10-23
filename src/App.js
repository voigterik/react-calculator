import {useState} from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import './components/calculator.css';
function App() {

	const [value, setValue] = useState("");
	const [result, setResult] = useState("");

	// create buttons 0 to 9
	const createNumbers = () => {
		const buttons = [];
		for(let i = 9; i >= 0; i--){
			buttons.push(<Button key={i} symbol={i} onClick={showSymbols} className="e-number" />);
		}
		return buttons;
	};

	// show value of clicked button
	const showSymbols = (symbol) => {
		setValue((value) => [...value, symbol + " "]);
	};

	const calculate = () => {
		// did not use eval() as it poses a security risk 
		// const symbols = eval(value.join(""));
		const symbols = Function("return " + value.join(""))();
		setResult(symbols);
	};

	// clear display
	const clearDisplay = () => {
		setValue("");
		setResult("");
	};
		
	return (
		<div className="b-calculator">
			<Display value={value} result={result} />
			<div className="e-buttons">
				<div className="e-numbers">
					{createNumbers()}
					<Button key="." symbol="." onClick={calculate} className="e-operator" />
					<Button key="=" symbol="=" onClick={calculate} className="e-operator" />
				</div>
				<div className="e-operators">
					<Button key="/" symbol="/" onClick={showSymbols} className="e-operator" />
					<Button key="*" symbol="*" onClick={showSymbols} className="e-operator" />
					<Button key="+" symbol="+" onClick={showSymbols} className="e-operator" />
					<Button key="-" symbol="-" onClick={showSymbols} className="e-operator" />
					
				</div>
				<Button key="Clear" symbol="Clear" onClick={clearDisplay} className="e-clear-button" />
			</div>
		</div>
	);
}

export default App;
