function Statistics({ good, neutral, bad }) {
	const total = good + neutral + bad;
	return (
		<>
			<p style={{ fontWeight: 'bold', fontSize: '30px' }}>Statistics</p>
			<p>good: {good}</p>
			<p>neutral: {neutral}</p>
			<p>bad: {bad}</p>
			<p>all: {total}</p>
			<p>average: {good * 1 + bad * -1}</p>
			<p>
				positive: {total === 0 ? 0 : (good / (good + neutral + bad)) * 100}%
			</p>
		</>
	);
}

export default Statistics;
