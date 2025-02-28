import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', telephone: 587555847 },
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filterCriteria, setFilterCriteria] = useState('');

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

	const filteredPhoneBook = persons.filter(({ name }) =>
		name.includes(filterCriteria)
	);

	return (
		<div>
			<h1>Phonebook</h1>
			<div>
				filter shown with:
				<input
					value={filterCriteria}
					onChange={(e) => setFilterCriteria(e.target.value)}
				/>
			</div>
			<h2>add a new contact</h2>
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
			{filteredPhoneBook.map(({ name, telephone }, index) => (
				<p key={index}>
					{name} {telephone}
				</p>
			))}
		</div>
	);
};

export default App;
