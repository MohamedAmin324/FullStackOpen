import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', telephone: 587555847 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (newName === '') return;
		if (newNumber === '') return;
		if (persons.findIndex(({ name }) => name === newName) !== -1) {
			alert(`${newName} already exists!!!`);
			return;
		}

		setPersons([...persons, { name: newName, telephone: newNumber }]);
		setNewName('');
		setNewNumber('');
	}

	function handleChange({ target: { value } }) {
		if (!verifyNumber(value)) {
			alert('Enter a number');
			return;
		}
		setNewNumber(value);
	}

	function verifyNumber(input) {
		const characters = input.split('');
		return characters.every((c) =>
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(c))
		);
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name:
					<input value={newName} onChange={(e) => setNewName(e.target.value)} />
				</div>
				<div>
					number:
					<input type='tel' value={newNumber} onChange={handleChange} />
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map(({ name, telephone }, index) => (
				<p key={index}>
					{name} {telephone}
				</p>
			))}
		</div>
	);
};

export default App;
