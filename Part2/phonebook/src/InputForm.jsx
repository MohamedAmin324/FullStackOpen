function InputForm({
	handleSubmit,
	newName,
	newNumber,
	handleNameChange,
	handleNumberChange,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				name:
				<input value={newName} onChange={handleNameChange} />
			</div>
			<div>
				number:
				<input type='tel' value={newNumber} onChange={handleNumberChange} />
			</div>
			<div>
				<button type='submit'>add</button>
			</div>
		</form>
	);
}

export default InputForm;
