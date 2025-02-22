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

	return (
		<div>
			<FeedBackPanel updateState={updateState} />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
