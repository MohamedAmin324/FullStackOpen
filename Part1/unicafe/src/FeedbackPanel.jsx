import Button from './Button';

function FeedBackPanel({ updateState }) {
	return (
		<>
			<p style={{ fontWeight: 'bold', fontSize: '30px' }}>give feedback</p>
			<div>
				<Button text='good' updateState={updateState} />
				<Button text='neutral' updateState={updateState} />
				<Button text='bad' updateState={updateState} />
			</div>
		</>
	);
}

export default FeedBackPanel;
