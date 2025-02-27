import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
	const [newName, setNewName] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (newName === '') return;
		if (persons.findIndex(({ name }) => name === newName) !== -1) {
			alert(`${newName} already exists!!!`);
			return;
		}

		setPersons([...persons, { name: newName }]);
		setNewName('');
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
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map(({ name }, index) => (
				<p key={index}>{name}</p>
			))}
		</div>
	);
};

export default App;
