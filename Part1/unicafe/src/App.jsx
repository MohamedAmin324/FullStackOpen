import { useState } from 'react';
import FeedBackPanel from './FeedbackPanel';
import Statistics from './Statistics';

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const updateState = (state) => {
		switch (state) {
			case 'good': {
				setGood((prev) => prev + 1);
				break;
			}
			case 'neutral': {
				setNeutral((prev) => prev + 1);
				break;
			}
			default: {
				setBad((prev) => prev + 1);
			}
		}
	};

	const total = good + neutral + bad;

	return (
		<div>
			<FeedBackPanel updateState={updateState} />
			<Statistics good={good} neutral={neutral} bad={bad} />
			<p>all: {total}</p>
			<p>average: {good * 1 + bad * -1}</p>
			<p>
				positive:{' '}
				{total === 0 ? 0 : (good / (good + neutral + bad)) * 100}%
			</p>
		</div>
	);
};

export default App;
