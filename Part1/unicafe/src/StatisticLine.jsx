function StatisticLine({ description, value }) {
	return (
		<tr>
			<td>{description}</td>
			<td>{value}</td>
		</tr>
	);
}

export default StatisticLine;
