function Button({ text, updateState }) {
	return <button onClick={() => updateState(text)}>{text}</button>;
}

export default Button;
