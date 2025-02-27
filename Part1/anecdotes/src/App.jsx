import { useState } from 'react';

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.',
	];

	const [votes, setVotes] = useState(new Array(8).fill(0));

	const [selected, setSelected] = useState(0);
	const handleClick = () => {
		const randomIndex = Math.floor(Math.random() * anecdotes.length);
		setSelected(randomIndex);
	};
	const updateVote = () => {
		votes[selected]++;
		setVotes([...votes]);
	};

	const getMaxValueIndex = (list) => {
		let maxValueIndex = 0;
		list.forEach((item, index) => {
			if (item > list[maxValueIndex]) maxValueIndex = index;
		});
		return maxValueIndex;
	};

	const mostFavorableIndex = getMaxValueIndex(votes);

	return (
		<>
			<div>{anecdotes[selected]}</div>
			<p>has {votes[selected]} votes</p>
			<button onClick={updateVote}>Vote</button>
			<button onClick={handleClick}>next anecdote</button>
			<div>{anecdotes[mostFavorableIndex]}</div>
			<p>has {votes[mostFavorableIndex]} votes</p>
		</>
	);
};

export default App;
