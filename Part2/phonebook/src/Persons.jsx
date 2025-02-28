function Persons({ filteredPhoneBook }) {
	return (
		<div>
			{filteredPhoneBook.map(({ name, number, id }) => (
				<p key={id}>
					{name} {number}
				</p>
			))}
		</div>
	);
}

export default Persons;
