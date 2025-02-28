function Filter({ filterCriteria, handleFilterChange }) {
	return (
		<div>
			filter shown with:
			<input value={filterCriteria} onChange={handleFilterChange} />
		</div>
	);
}

export default Filter;
