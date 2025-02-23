import StatisticLine from './StatisticLine';

function Statistics({ good, neutral, bad }) {
	const total = good + neutral + bad;
	const average = (good * 1 + bad * -1) / total;
	const positive = total !== 0 ? (good / total) * 100 + '%' : 0 + '%';
	return total === 0 ? (
		<p>no feedback gathered</p>
	) : (
		<>
			<p style={{ fontWeight: 'bold', fontSize: '30px' }}>Statistics</p>
			<table>
				<tbody>
					<StatisticLine description={'good'} value={good} />
					<StatisticLine description={'neutral'} value={neutral} />
					<StatisticLine description={'bad'} value={bad} />
					<StatisticLine description={'all'} value={total} />
					<StatisticLine description={'average'} value={average} />
					<StatisticLine description={'positive'} value={positive} />
				</tbody>
			</table>
		</>
	);
}

export default Statistics;
