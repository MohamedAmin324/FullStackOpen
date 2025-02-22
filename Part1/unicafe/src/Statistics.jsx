import StatisticLine from './StatisticLine';

function Statistics({ good, neutral, bad }) {
	const total = good + neutral + bad;
	const average = (good * 1 + bad * -1) / total;
	const positive = (good / total) * 100 + '%';
	return total === 0 ? (
		'no feedback gathered'
	) : (
		<>
			<p style={{ fontWeight: 'bold', fontSize: '30px' }}>Statistics</p>
			<StatisticLine description={'good'} value={good} />
			<StatisticLine description={'neutral'} value={neutral} />
			<StatisticLine description={'bad'} value={bad} />
			<StatisticLine description={'all'} value={total} />
			<StatisticLine description={'average'} value={average} />
			{total === 0 ? (
				'0%'
			) : (
				<StatisticLine description={'positive'} value={positive} />
			)}
		</>
	);
}

export default Statistics;
