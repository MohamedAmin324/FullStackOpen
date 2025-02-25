import Header from './Header.jsx';
import Content from './Content.jsx';

function Course({ course: { name, parts } }) {
	return (
		<div>
			<Header name={name} />
			<Content parts={parts} />
		</div>
	);
}

export default Course;
