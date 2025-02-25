import Header from './Header.jsx';
import Content from './Content.jsx';
import Total from './Total.jsx';

function Course({ course: { name, parts } }) {
	return (
		<div>
			<Header name={name} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
}

export default Course;
