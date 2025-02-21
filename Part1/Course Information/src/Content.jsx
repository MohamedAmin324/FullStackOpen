import Part from './Part';

export default function Content({ parts }) {
	return (
		<>
			<Part {...parts[0]} />
			<Part {...parts[1]} />
			<Part {...parts[2]} />
		</>
	);
}
