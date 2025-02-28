import { useState } from 'react';
import Filter from './Filter';
import InputForm from './InputForm';
import Persons from './Persons';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
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

		setPersons([
			...persons,
			{ name: newName, number: newNumber, id: persons.length + 1 },
		]);
		setNewName('');
		setNewNumber('');
	}

	function handleNumberChange({ target: { value } }) {
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
		name.toUpperCase().includes(filterCriteria.toUpperCase())
	);

	const handleFilterChange = (e) => setFilterCriteria(e.target.value);

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter
				filterCriteria={filterCriteria}
				handleFilterChange={handleFilterChange}
			/>
			<h2>add a new contact</h2>
			<InputForm
				newName={newName}
				newNumber={newNumber}
				handleNameChange={(e) => setNewName(e.target.value)}
				handleNumberChange={handleNumberChange}
				handleSubmit={handleSubmit}
			/>
			<h2>Numbers</h2>
			<Persons filteredPhoneBook={filteredPhoneBook} />
		</div>
	);
};

export default App;
