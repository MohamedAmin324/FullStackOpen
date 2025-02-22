function Statistics({ good, neutral, bad }) {
	return (
		<>
			<p style={{ fontWeight: 'bold', fontSize: '30px' }}>Statistics</p>
			<p>good: {good}</p>
			<p>neutral: {neutral}</p>
			<p>bad: {bad}</p>
		</>
	);
}

export default Statistics;
